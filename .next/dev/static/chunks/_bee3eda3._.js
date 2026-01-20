(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/questions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "differenceFactor",
    ()=>differenceFactor,
    "litersToBathtubs",
    ()=>litersToBathtubs,
    "litersToOlympicPoolsPerYear",
    ()=>litersToOlympicPoolsPerYear,
    "questionSteps",
    ()=>questionSteps
]);
// Simple constants for the story.
const LITERS_PER_BATHTUB = 150;
const LITERS_PER_OLYMPIC_POOL = 2500000;
function formatNumber(value) {
    return value.toLocaleString(undefined, {
        maximumFractionDigits: 0
    });
}
function litersToBathtubs(litersPerDay) {
    return litersPerDay / LITERS_PER_BATHTUB;
}
function litersToOlympicPoolsPerYear(litersPerDay) {
    const yearlyLiters = litersPerDay * 365;
    return yearlyLiters / LITERS_PER_OLYMPIC_POOL;
}
function differenceFactor(guess, actual) {
    if (!guess || guess <= 0 || !actual || actual <= 0) return "";
    const factor = actual / guess;
    if (factor < 1.25 && factor > 0.8) {
        return "very close to reality.";
    }
    if (factor >= 1.25 && factor < 2) {
        return "lower than reality – you’re underestimating a bit.";
    }
    if (factor >= 2 && factor < 5) {
        return "much lower than reality – you’re underestimating a lot.";
    }
    if (factor >= 5) {
        return "far below reality – most of your water use is invisible.";
    }
    if (factor <= 0.8 && factor > 0.5) {
        return "higher than reality – you’re slightly overestimating.";
    }
    if (factor <= 0.5 && factor > 0.2) {
        return "much higher than reality – you’re overestimating a lot.";
    }
    return "very far from reality.";
}
const questionSteps = [
    {
        id: "dailyVolume",
        prompt: "How many liters of water do you think you use in a day?",
        inputType: "slider",
        unitsLabel: "liters per day",
        reveal: {
            chartType: "bar",
            actualValue: 300,
            maxValue: 600,
            context: (userValue)=>{
                const actual = 300;
                const poolsPerYear = litersToOlympicPoolsPerYear(actual);
                const bathtubsPerDay = litersToBathtubs(actual);
                const factorText = differenceFactor(userValue, actual);
                return [
                    `A typical person uses around ${formatNumber(actual)} liters per day – about ${bathtubsPerDay.toFixed(1)} bathtubs every single day.`,
                    `Over a year, that’s roughly ${poolsPerYear.toFixed(2)} Olympic pools of water. Your guess was ${factorText}`
                ].join(" ");
            },
            subtitle: (userValue)=>{
                const actual = 300;
                const diff = Math.abs(actual - userValue);
                if (!userValue || userValue <= 0) return "";
                return `You were off by ${formatNumber(diff)} liters compared to this benchmark.`;
            }
        }
    },
    {
        id: "showerShare",
        prompt: "What share of your home water do you think goes into showers?",
        inputType: "slider",
        unitsLabel: "% of home water use",
        reveal: {
            chartType: "split",
            actualValue: 30,
            maxValue: 100,
            context: (userValue)=>{
                const actual = 30;
                const factorText = differenceFactor(userValue, actual);
                return `Showers account for about ${actual}% of indoor water use in many homes. Your guess was ${factorText}`;
            },
            subtitle: (userValue)=>{
                const actual = 30;
                const diff = Math.abs(actual - userValue);
                return `You were off by ${diff.toFixed(0)} percentage points from this reference share.`;
            }
        }
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/QuestionScreens.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "barActual": "QuestionScreens-module__3YgRGq__barActual",
  "barChart": "QuestionScreens-module__3YgRGq__barChart",
  "barFill": "QuestionScreens-module__3YgRGq__barFill",
  "barFillVisible": "QuestionScreens-module__3YgRGq__barFillVisible",
  "barGuess": "QuestionScreens-module__3YgRGq__barGuess",
  "barLabel": "QuestionScreens-module__3YgRGq__barLabel",
  "barRow": "QuestionScreens-module__3YgRGq__barRow",
  "barTrack": "QuestionScreens-module__3YgRGq__barTrack",
  "barValue": "QuestionScreens-module__3YgRGq__barValue",
  "chartCard": "QuestionScreens-module__3YgRGq__chartCard",
  "contextBody": "QuestionScreens-module__3YgRGq__contextBody",
  "contextHeadline": "QuestionScreens-module__3YgRGq__contextHeadline",
  "contextSection": "QuestionScreens-module__3YgRGq__contextSection",
  "contextSubtitle": "QuestionScreens-module__3YgRGq__contextSubtitle",
  "footer": "QuestionScreens-module__3YgRGq__footer",
  "form": "QuestionScreens-module__3YgRGq__form",
  "header": "QuestionScreens-module__3YgRGq__header",
  "inner": "QuestionScreens-module__3YgRGq__inner",
  "legendItem": "QuestionScreens-module__3YgRGq__legendItem",
  "legendSwatch": "QuestionScreens-module__3YgRGq__legendSwatch",
  "main": "QuestionScreens-module__3YgRGq__main",
  "primaryButton": "QuestionScreens-module__3YgRGq__primaryButton",
  "prompt": "QuestionScreens-module__3YgRGq__prompt",
  "screen": "QuestionScreens-module__3YgRGq__screen",
  "secondaryButton": "QuestionScreens-module__3YgRGq__secondaryButton",
  "slider": "QuestionScreens-module__3YgRGq__slider",
  "sliderRow": "QuestionScreens-module__3YgRGq__sliderRow",
  "splitBarWrapper": "QuestionScreens-module__3YgRGq__splitBarWrapper",
  "splitBars": "QuestionScreens-module__3YgRGq__splitBars",
  "splitFill": "QuestionScreens-module__3YgRGq__splitFill",
  "splitLegend": "QuestionScreens-module__3YgRGq__splitLegend",
  "splitRow": "QuestionScreens-module__3YgRGq__splitRow",
  "splitTrack": "QuestionScreens-module__3YgRGq__splitTrack",
  "stepCounter": "QuestionScreens-module__3YgRGq__stepCounter",
  "stepLabel": "QuestionScreens-module__3YgRGq__stepLabel",
  "summaryCard": "QuestionScreens-module__3YgRGq__summaryCard",
  "summaryChart": "QuestionScreens-module__3YgRGq__summaryChart",
  "summaryGrid": "QuestionScreens-module__3YgRGq__summaryGrid",
  "summaryTitle": "QuestionScreens-module__3YgRGq__summaryTitle",
  "swatchActual": "QuestionScreens-module__3YgRGq__swatchActual",
  "swatchGuess": "QuestionScreens-module__3YgRGq__swatchGuess",
  "validation": "QuestionScreens-module__3YgRGq__validation",
  "valueBubble": "QuestionScreens-module__3YgRGq__valueBubble",
  "valueNumber": "QuestionScreens-module__3YgRGq__valueNumber",
  "valueUnits": "QuestionScreens-module__3YgRGq__valueUnits",
});
}),
"[project]/src/components/PredictScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PredictScreen",
    ()=>PredictScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/QuestionScreens.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const DEFAULTS = {
    dailyVolume: 200,
    showerShare: 40
};
function PredictScreen({ step, initialValue, onSubmit }) {
    _s();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValue ?? DEFAULTS[step.id] ?? 0);
    const [touched, setTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PredictScreen.useEffect": ()=>{
            if (initialValue !== undefined) {
                setValue(initialValue);
            }
        }
    }["PredictScreen.useEffect"], [
        initialValue
    ]);
    const handleChange = (event)=>{
        setTouched(true);
        const numeric = Number(event.target.value);
        if (Number.isNaN(numeric)) return;
        setValue(numeric);
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        if (!isValid) return;
        onSubmit(value);
    };
    const min = 0;
    const max = step.id === "dailyVolume" ? 600 : 100;
    const isValid = value > min && value <= max;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].screen,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepLabel,
                            children: "Predict"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PredictScreen.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepCounter,
                            children: [
                                "Question ",
                                step.id === "dailyVolume" ? 1 : 2,
                                " of 2"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PredictScreen.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PredictScreen.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].prompt,
                            children: step.prompt
                        }, void 0, false, {
                            fileName: "[project]/src/components/PredictScreen.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sliderRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: min,
                                            max: max,
                                            step: step.id === "showerShare" ? 1 : 10,
                                            value: value,
                                            onChange: handleChange,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slider,
                                            "aria-label": step.prompt
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PredictScreen.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].valueBubble,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].valueNumber,
                                                    children: Math.round(value).toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PredictScreen.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].valueUnits,
                                                    children: step.unitsLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PredictScreen.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/PredictScreen.tsx",
                                            lineNumber: 74,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PredictScreen.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this),
                                touched && !isValid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].validation,
                                    children: [
                                        "Choose a value between ",
                                        min + 1,
                                        " and ",
                                        max.toLocaleString(),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PredictScreen.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                                    disabled: !isValid,
                                    children: "See how that compares"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PredictScreen.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PredictScreen.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PredictScreen.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PredictScreen.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/PredictScreen.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(PredictScreen, "LjAx2utG4Vc6aebOX2bZiqAg3H8=");
_c = PredictScreen;
var _c;
__turbopack_context__.k.register(_c, "PredictScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RevealScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RevealScreen",
    ()=>RevealScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/QuestionScreens.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function RevealScreen({ step, answerValue, isLastStep, onNext }) {
    _s();
    const { reveal } = step;
    const [animate, setAnimate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RevealScreen.useEffect": ()=>{
            const frame = requestAnimationFrame({
                "RevealScreen.useEffect.frame": ()=>setAnimate(true)
            }["RevealScreen.useEffect.frame"]);
            return ({
                "RevealScreen.useEffect": ()=>cancelAnimationFrame(frame)
            })["RevealScreen.useEffect"];
        }
    }["RevealScreen.useEffect"], [
        step.id
    ]);
    const maxBar = reveal.maxValue || Math.max(reveal.actualValue, answerValue);
    const actualRatio = Math.min(reveal.actualValue / maxBar, 1);
    const guessRatio = Math.min(answerValue / maxBar, 1);
    const titleValue = step.id === "showerShare" ? `${reveal.actualValue.toFixed(0)}%` : `${reveal.actualValue.toLocaleString()} L / day`;
    const labelGuess = step.id === "showerShare" ? `${answerValue.toFixed(0)}%` : `${answerValue.toLocaleString()} L`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].screen,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepLabel,
                            children: "Reveal"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RevealScreen.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepCounter,
                            children: [
                                "Question ",
                                step.id === "dailyVolume" ? 1 : 2,
                                " of 2"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RevealScreen.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RevealScreen.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].prompt,
                            children: step.prompt
                        }, void 0, false, {
                            fileName: "[project]/src/components/RevealScreen.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chartCard,
                            "aria-label": "Your guess vs data",
                            children: [
                                reveal.chartType === "bar" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barChart,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barLabel,
                                                    children: "Your guess"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RevealScreen.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barTrack,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barFill} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barGuess} ${animate ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barFillVisible : ""}`,
                                                        style: {
                                                            "--bar-scale": guessRatio
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/RevealScreen.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RevealScreen.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barValue,
                                                    children: labelGuess
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RevealScreen.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RevealScreen.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barLabel,
                                                    children: "Typical value"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RevealScreen.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barTrack,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barFill} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barActual} ${animate ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barFillVisible : ""}`,
                                                        style: {
                                                            "--bar-scale": actualRatio
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/RevealScreen.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RevealScreen.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barValue,
                                                    children: titleValue
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RevealScreen.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RevealScreen.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RevealScreen.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this),
                                reveal.chartType === "split" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].splitBarWrapper,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].splitLegend,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legendItem,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legendSwatch} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].swatchGuess}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RevealScreen.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Your guess"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RevealScreen.tsx",
                                                            lineNumber: 87,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/RevealScreen.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legendItem,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].legendSwatch} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].swatchActual}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RevealScreen.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Data"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RevealScreen.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/RevealScreen.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RevealScreen.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].splitBars,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].splitRow,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barLabel,
                                                            children: "Showers"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RevealScreen.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].splitTrack,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].splitFill} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barGuess} ${animate ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barFillVisible : ""}`,
                                                                style: {
                                                                    "--bar-scale": Math.min(answerValue / 100, 1)
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RevealScreen.tsx",
                                                                lineNumber: 98,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RevealScreen.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barValue,
                                                            children: labelGuess
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RevealScreen.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/RevealScreen.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].splitRow,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barLabel,
                                                            children: "Showers (data)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RevealScreen.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].splitTrack,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].splitFill} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barActual} ${animate ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barFillVisible : ""}`,
                                                                style: {
                                                                    "--bar-scale": Math.min(reveal.actualValue / 100, 1)
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/RevealScreen.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RevealScreen.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barValue,
                                                            children: titleValue
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RevealScreen.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/RevealScreen.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RevealScreen.tsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RevealScreen.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RevealScreen.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contextSection,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contextHeadline,
                                    children: titleValue
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RevealScreen.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contextBody,
                                    children: reveal.context(answerValue)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RevealScreen.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                reveal.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contextSubtitle,
                                    children: reveal.subtitle(answerValue)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RevealScreen.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RevealScreen.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RevealScreen.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onNext,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].primaryButton,
                        children: isLastStep ? "See the big picture" : "Next insight"
                    }, void 0, false, {
                        fileName: "[project]/src/components/RevealScreen.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/RevealScreen.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/RevealScreen.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/RevealScreen.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(RevealScreen, "z07FJ1oDfa7+qdGd0fWFFN4Jr94=");
_c = RevealScreen;
var _c;
__turbopack_context__.k.register(_c, "RevealScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SummaryScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SummaryScreen",
    ()=>SummaryScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/QuestionScreens.module.css [app-client] (css module)");
;
;
function SummaryScreen({ steps, answers, onRestart }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].screen,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepLabel,
                        children: "Recap"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SummaryScreen.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/SummaryScreen.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].prompt,
                            children: "Your intuition vs. everyday water reality"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SummaryScreen.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryGrid,
                            children: steps.map((step)=>{
                                const answer = answers.find((a)=>a.stepId === step.id);
                                const actual = step.reveal.actualValue;
                                const labelUnits = step.id === "showerShare" ? "%" : "L / day";
                                const userValue = answer?.value ?? 0;
                                const max = step.id === "showerShare" ? 100 : step.reveal.maxValue;
                                const actualRatio = Math.min(actual / max, 1);
                                const guessRatio = Math.min(userValue / max, 1);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryTitle,
                                            children: step.prompt
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SummaryScreen.tsx",
                                            lineNumber: 40,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].summaryChart,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barRow,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barLabel,
                                                            children: "You guessed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SummaryScreen.tsx",
                                                            lineNumber: 43,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barTrack,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barFill} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barGuess} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barFillVisible}`,
                                                                style: {
                                                                    "--bar-scale": guessRatio
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SummaryScreen.tsx",
                                                                lineNumber: 45,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SummaryScreen.tsx",
                                                            lineNumber: 44,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barValue,
                                                            children: [
                                                                userValue.toLocaleString(),
                                                                " ",
                                                                labelUnits
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/SummaryScreen.tsx",
                                                            lineNumber: 52,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SummaryScreen.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barRow,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barLabel,
                                                            children: "Typical value"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SummaryScreen.tsx",
                                                            lineNumber: 57,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barTrack,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barFill} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barActual} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barFillVisible}`,
                                                                style: {
                                                                    "--bar-scale": actualRatio
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SummaryScreen.tsx",
                                                                lineNumber: 59,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SummaryScreen.tsx",
                                                            lineNumber: 58,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].barValue,
                                                            children: [
                                                                actual.toLocaleString(),
                                                                " ",
                                                                labelUnits
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/SummaryScreen.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/SummaryScreen.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SummaryScreen.tsx",
                                            lineNumber: 41,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, step.id, true, {
                                    fileName: "[project]/src/components/SummaryScreen.tsx",
                                    lineNumber: 39,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/SummaryScreen.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contextSection,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contextBody,
                                children: "Much of your water footprint is hidden in the background: the food you eat, the energy you use, and the products you buy. The taps you see are only part of the story."
                            }, void 0, false, {
                                fileName: "[project]/src/components/SummaryScreen.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/SummaryScreen.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SummaryScreen.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onRestart,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secondaryButton,
                        children: "Try the questions again"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SummaryScreen.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/SummaryScreen.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SummaryScreen.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SummaryScreen.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = SummaryScreen;
var _c;
__turbopack_context__.k.register(_c, "SummaryScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/QuestionFlow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuestionFlow",
    ()=>QuestionFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/questions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PredictScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PredictScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RevealScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RevealScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SummaryScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SummaryScreen.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function QuestionFlow() {
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("predict");
    const [stepIndex, setStepIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const currentStep = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["questionSteps"][stepIndex];
    const currentAnswer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuestionFlow.useMemo[currentAnswer]": ()=>{
            if (!currentStep) return undefined;
            return answers.find({
                "QuestionFlow.useMemo[currentAnswer]": (a)=>a.stepId === currentStep.id
            }["QuestionFlow.useMemo[currentAnswer]"]);
        }
    }["QuestionFlow.useMemo[currentAnswer]"], [
        answers,
        currentStep
    ]);
    if (!currentStep && mode !== "summary") {
        return null;
    }
    const isLastStep = stepIndex === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["questionSteps"].length - 1;
    const handleAnswerSubmit = (value)=>{
        if (!currentStep) return;
        setAnswers((prev)=>{
            const existingIndex = prev.findIndex((a)=>a.stepId === currentStep.id);
            if (existingIndex >= 0) {
                const clone = [
                    ...prev
                ];
                clone[existingIndex] = {
                    stepId: currentStep.id,
                    value
                };
                return clone;
            }
            return [
                ...prev,
                {
                    stepId: currentStep.id,
                    value
                }
            ];
        });
        setMode("reveal");
    };
    const handleNextFromReveal = ()=>{
        if (isLastStep) {
            setMode("summary");
            return;
        }
        setStepIndex((prev)=>prev + 1);
        setMode("predict");
    };
    const handleRestart = ()=>{
        setAnswers([]);
        setStepIndex(0);
        setMode("predict");
    };
    if (mode === "summary") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SummaryScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SummaryScreen"], {
            steps: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$questions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["questionSteps"],
            answers: answers,
            onRestart: handleRestart
        }, void 0, false, {
            fileName: "[project]/src/components/QuestionFlow.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this);
    }
    if (!currentStep) {
        return null;
    }
    if (mode === "predict") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PredictScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictScreen"], {
            step: currentStep,
            onSubmit: handleAnswerSubmit,
            initialValue: currentAnswer?.value
        }, void 0, false, {
            fileName: "[project]/src/components/QuestionFlow.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RevealScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RevealScreen"], {
        step: currentStep,
        answerValue: currentAnswer?.value ?? 0,
        onNext: handleNextFromReveal,
        isLastStep: isLastStep
    }, void 0, false, {
        fileName: "[project]/src/components/QuestionFlow.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_s(QuestionFlow, "11OtPIcWxo3DTWr0dm7omII2z8I=");
_c = QuestionFlow;
var _c;
__turbopack_context__.k.register(_c, "QuestionFlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_bee3eda3._.js.map