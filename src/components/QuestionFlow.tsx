"use client";

import { useMemo, useState, useEffect } from "react";
import { QuestionStep, questionSteps } from "../questions";
import { PredictScreen } from "./PredictScreen";
import { RevealScreen } from "./RevealScreen";
import { AIAgentScreen } from "./AIAgentScreen";
import { IntroScreen } from "./IntroScreen";
import { MoodCheckScreen } from "./MoodCheckScreen";
import { SynthesisScreen } from "./SynthesisScreen";
import { FinalActionsScreen } from "./FinalActionsScreen";
import { ElectricityExpectationScreen } from "./ElectricityExpectationScreen";
import { PowerRisingScreen } from "./PowerRisingScreen";
import { PerPersonStableScreen } from "./PerPersonStableScreen";
import { RecentJumpScreen } from "./RecentJumpScreen";
import { AICoincidenceScreen } from "./AICoincidenceScreen";
import { SpeedIsStoryScreen } from "./SpeedIsStoryScreen";

type Mode = "intro" | "moodCheck" | "powerRising" | "electricityExpectation" | "perPersonStable" | "recentJump" | "aiCoincidence" | "synthesis" | "speedIsStory" | "finalActions" | "predict" | "reveal" | "aiAgent";
type TransitionDirection = "forward" | "backward";

export interface AnswerRecord {
  stepId: QuestionStep["id"];
  value: number;
  mood?: string;
  electricityExpectation?: string;
  povertyPercent?: number;
  hypothesis?: string;
  aiInvestmentSelections?: string[];
  synthesisReflection?: string;
}

export function QuestionFlow() {
  const [mode, setMode] = useState<Mode>(() => {
    // Check if first step has an intro
    const firstStep = questionSteps[0];
    return firstStep?.intro ? "intro" : "predict";
  });
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [transitionDirection, setTransitionDirection] = useState<TransitionDirection>("forward");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Scroll to top whenever screen changes
  useEffect(() => {
    // Multiple approaches to ensure scroll works
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Also try after a small delay for content that renders async
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
    return () => clearTimeout(timer);
  }, [mode, stepIndex]);

  const currentStep: QuestionStep | undefined = questionSteps[stepIndex];

  const currentAnswer = useMemo(() => {
    if (!currentStep) return undefined;
    return answers.find((a) => a.stepId === currentStep.id);
  }, [answers, currentStep]);

  if (!currentStep && mode !== "aiAgent") {
    return null;
  }

  const isLastStep = stepIndex === questionSteps.length - 1;

  const handleAnswerSubmit = (value: number) => {
    if (!currentStep) return;
    setIsTransitioning(true);
    setTransitionDirection("forward");
    setAnswers((prev) => {
      const existingIndex = prev.findIndex((a) => a.stepId === currentStep.id);
      if (existingIndex >= 0) {
        const clone = [...prev];
        clone[existingIndex] = { stepId: currentStep.id, value };
        return clone;
      }
      return [...prev, { stepId: currentStep.id, value }];
    });

    // Small delay to allow exit animation
    setTimeout(() => {
      setMode("reveal");
      setIsTransitioning(false);
    }, 50);
  };

  const handleNextFromReveal = () => {
    if (isLastStep) {
      setIsTransitioning(true);
      setTransitionDirection("forward");
      setTimeout(() => {
        setMode("aiAgent");
        setIsTransitioning(false);
      }, 50);
      return;
    }
    setIsTransitioning(true);
    setTransitionDirection("forward");
    setTimeout(() => {
      const nextIndex = stepIndex + 1;
      const nextStep = questionSteps[nextIndex];
      setStepIndex(nextIndex);
      // Check if next step has an intro
      setMode(nextStep?.intro ? "intro" : "predict");
      setIsTransitioning(false);
    }, 50);
  };

  const handleBeginFromIntro = () => {
    if (!currentStep) return;
    setIsTransitioning(true);
    setTransitionDirection("forward");
    setTimeout(() => {
      // Check if question has moodCheck page, otherwise go to predict
      if (currentStep.moodCheck) {
        setMode("moodCheck");
      } else {
        setMode("predict");
      }
      setIsTransitioning(false);
    }, 50);
  };

  const handleMoodSelect = (mood: string) => {
    if (!currentStep) return;
    setIsTransitioning(true);
    setTransitionDirection("forward");
    setAnswers((prev) => {
      const existingIndex = prev.findIndex((a) => a.stepId === currentStep.id);
      if (existingIndex >= 0) {
        const clone = [...prev];
        clone[existingIndex] = { ...clone[existingIndex], mood };
        return clone;
      }
      return [...prev, { stepId: currentStep.id, value: 0, mood }];
    });
    setTimeout(() => {
      // Check if question has powerRising page, then electricityExpectation, otherwise go to predict
      if (currentStep.powerRising) {
        setMode("powerRising");
      } else if (currentStep.electricityExpectation) {
        setMode("electricityExpectation");
      } else {
        setMode("predict");
      }
      setIsTransitioning(false);
    }, 50);
  };

  const handleNextFromPowerRising = () => {
    if (!currentStep) return;
    setIsTransitioning(true);
    setTransitionDirection("forward");
    setTimeout(() => {
      // Check if question has electricityExpectation page, otherwise go to predict
      if (currentStep.electricityExpectation) {
        setMode("electricityExpectation");
      } else {
        setMode("predict");
      }
      setIsTransitioning(false);
    }, 50);
  };

  const handleElectricityExpectationSelect = (selection: string) => {
    if (!currentStep) return;
    setIsTransitioning(true);
    setTransitionDirection("forward");
    setAnswers((prev) => {
      const existingIndex = prev.findIndex((a) => a.stepId === currentStep.id);
      if (existingIndex >= 0) {
        const clone = [...prev];
        clone[existingIndex] = { ...clone[existingIndex], electricityExpectation: selection };
        return clone;
      }
      return [...prev, { stepId: currentStep.id, value: 0, electricityExpectation: selection }];
    });
    setTimeout(() => {
      // Check if question has perPersonStable page, otherwise go to predict
      if (currentStep.perPersonStable) {
        setMode("perPersonStable");
      } else {
        setMode("predict");
      }
      setIsTransitioning(false);
    }, 50);
  };

  const handleNextFromPerPersonStable = () => {
    if (!currentStep) return;
    setIsTransitioning(true);
    setTransitionDirection("forward");
    setTimeout(() => {
      // Check if question has recentJump page, otherwise go to predict
      if (currentStep.recentJump) {
        setMode("recentJump");
      } else {
        setMode("predict");
      }
      setIsTransitioning(false);
    }, 50);
  };

  const handleNextFromRecentJump = () => {
    if (!currentStep) return;
    setIsTransitioning(true);
    setTransitionDirection("forward");
    setTimeout(() => {
      // Check if question has aiCoincidence page, otherwise go to synthesis
      if (currentStep.aiCoincidence) {
        setMode("aiCoincidence");
      } else if (currentStep.synthesis) {
        setMode("synthesis");
      } else if (isLastStep) {
        setMode("aiAgent");
      } else {
        const nextIndex = stepIndex + 1;
        const nextStep = questionSteps[nextIndex];
        setStepIndex(nextIndex);
        setMode(nextStep?.intro ? "intro" : "predict");
      }
      setIsTransitioning(false);
    }, 50);
  };

  const handleNextFromAICoincidence = () => {
    if (!currentStep) return;
    setIsTransitioning(true);
    setTransitionDirection("forward");
    setTimeout(() => {
      // Check if question has synthesis page, otherwise go to aiAgent
      if (currentStep.synthesis) {
        setMode("synthesis");
      } else if (isLastStep) {
        setMode("aiAgent");
      } else {
        const nextIndex = stepIndex + 1;
        const nextStep = questionSteps[nextIndex];
        setStepIndex(nextIndex);
        setMode(nextStep?.intro ? "intro" : "predict");
      }
      setIsTransitioning(false);
    }, 50);
  };


  const handleSynthesisSubmit = (reflection: string) => {
    if (!currentStep) return;
    setIsTransitioning(true);
    setTransitionDirection("forward");
    setAnswers((prev) => {
      const existingIndex = prev.findIndex((a) => a.stepId === currentStep.id);
      if (existingIndex >= 0) {
        const clone = [...prev];
        clone[existingIndex] = { ...clone[existingIndex], synthesisReflection: reflection };
        return clone;
      }
      return [...prev, { stepId: currentStep.id, value: 0, synthesisReflection: reflection }];
    });
    setTimeout(() => {
      // Check if question has speedIsStory page, otherwise go directly to AI Agent
      if (currentStep.speedIsStory) {
        setMode("speedIsStory");
      } else {
        // Go directly to AI Agent screen
        setMode("aiAgent");
      }
      setIsTransitioning(false);
    }, 50);
  };

  const handleNextFromSpeedIsStory = () => {
    if (!currentStep) return;
    setIsTransitioning(true);
    setTransitionDirection("forward");
    setTimeout(() => {
      // Go directly to AI Agent screen
      setMode("aiAgent");
      setIsTransitioning(false);
    }, 50);
  };

  const handleFinalAction = (actionIndex: number) => {
    // Placeholder handlers for now
    if (actionIndex === 0) {
      // Continue to next dimension
      if (isLastStep) {
        setIsTransitioning(true);
        setTransitionDirection("forward");
        setTimeout(() => {
          setMode("aiAgent");
          setIsTransitioning(false);
        }, 50);
      } else {
        setIsTransitioning(true);
        setTransitionDirection("forward");
        setTimeout(() => {
          const nextIndex = stepIndex + 1;
          const nextStep = questionSteps[nextIndex];
          setStepIndex(nextIndex);
          setMode(nextStep?.intro ? "intro" : "predict");
          setIsTransitioning(false);
        }, 50);
      }
    } else {
      // Explore sources & methodology - placeholder
      console.log("Explore sources & methodology");
    }
  };

  const handleRestart = () => {
    setAnswers([]);
    setStepIndex(0);
    const firstStep = questionSteps[0];
    setMode(firstStep?.intro ? "intro" : "predict");
  };

  // Determine animation class based on transition direction
  const getAnimationClass = () => {
    if (transitionDirection === "forward") {
      return "slideFromRight";
    }
    return "slideFromLeft";
  };

  if (mode === "aiAgent") {
    // Get the user's answers to pass to the AI agent
    const userAnswer = answers.find(a => a.stepId === "economicAidPoverty");

    return (
      <AIAgentScreen
        mood={userAnswer?.mood}
        electricityExpectation={userAnswer?.electricityExpectation}
        synthesisReflection={userAnswer?.synthesisReflection}
        onRestart={handleRestart}
        animationClass={getAnimationClass()}
      />
    );
  }

  if (!currentStep) {
    return null;
  }

  if (mode === "intro" && currentStep.intro) {
    return (
      <IntroScreen
        key={`intro-${stepIndex}`}
        title={currentStep.intro.title}
        subtitle={currentStep.intro.subtitle}
        ctaText={currentStep.intro.ctaText}
        onBegin={handleBeginFromIntro}
        animationClass={getAnimationClass()}
      />
    );
  }

  if (mode === "moodCheck" && currentStep.moodCheck) {
    return (
      <MoodCheckScreen
        key={`moodCheck-${stepIndex}`}
        moodCheck={currentStep.moodCheck}
        initialMood={currentAnswer?.mood}
        onMoodSelect={handleMoodSelect}
        animationClass={getAnimationClass()}
      />
    );
  }

  if (mode === "powerRising" && currentStep.powerRising) {
    return (
      <PowerRisingScreen
        key={`powerRising-${stepIndex}`}
        powerRising={currentStep.powerRising}
        onNext={handleNextFromPowerRising}
        animationClass={getAnimationClass()}
      />
    );
  }

  if (mode === "electricityExpectation" && currentStep.electricityExpectation) {
    return (
      <ElectricityExpectationScreen
        key={`electricityExpectation-${stepIndex}`}
        electricityExpectation={currentStep.electricityExpectation}
        initialSelection={currentAnswer?.electricityExpectation}
        onSelection={handleElectricityExpectationSelect}
        animationClass={getAnimationClass()}
      />
    );
  }

  if (mode === "perPersonStable" && currentStep.perPersonStable) {
    return (
      <PerPersonStableScreen
        key={`perPersonStable-${stepIndex}`}
        perPersonStable={currentStep.perPersonStable}
        onNext={handleNextFromPerPersonStable}
        animationClass={getAnimationClass()}
      />
    );
  }

  if (mode === "recentJump" && currentStep.recentJump) {
    return (
      <RecentJumpScreen
        key={`recentJump-${stepIndex}`}
        recentJump={currentStep.recentJump}
        onNext={handleNextFromRecentJump}
        animationClass={getAnimationClass()}
      />
    );
  }

  if (mode === "aiCoincidence" && currentStep.aiCoincidence) {
    return (
      <AICoincidenceScreen
        key={`aiCoincidence-${stepIndex}`}
        aiCoincidence={currentStep.aiCoincidence}
        onNext={handleNextFromAICoincidence}
        animationClass={getAnimationClass()}
      />
    );
  }


  if (mode === "synthesis" && currentStep.synthesis) {
    return (
      <SynthesisScreen
        key={`synthesis-${stepIndex}`}
        synthesis={currentStep.synthesis}
        initialReflection={currentAnswer?.synthesisReflection}
        onSubmit={handleSynthesisSubmit}
        animationClass={getAnimationClass()}
      />
    );
  }

  if (mode === "speedIsStory" && currentStep.speedIsStory) {
    return (
      <SpeedIsStoryScreen
        key={`speedIsStory-${stepIndex}`}
        speedIsStory={currentStep.speedIsStory}
        onNext={handleNextFromSpeedIsStory}
        animationClass={getAnimationClass()}
      />
    );
  }

  if (mode === "finalActions" && currentStep.finalActions) {
    return (
      <FinalActionsScreen
        key={`finalActions-${stepIndex}`}
        finalActions={currentStep.finalActions}
        onAction={handleFinalAction}
        animationClass={getAnimationClass()}
      />
    );
  }

  if (mode === "predict") {
    return (
      <PredictScreen
        key={`predict-${stepIndex}`}
        step={currentStep}
        onSubmit={handleAnswerSubmit}
        initialValue={currentAnswer?.value}
        animationClass={getAnimationClass()}
      />
    );
  }

  return (
    <RevealScreen
      key={`reveal-${stepIndex}`}
      step={currentStep}
      answerValue={currentAnswer?.value ?? 0}
      onNext={handleNextFromReveal}
      isLastStep={isLastStep}
      animationClass={getAnimationClass()}
    />
  );
}


