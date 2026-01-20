module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/questions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/components/QuestionScreens.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/src/components/PredictScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PredictScreen",
    ()=>PredictScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/QuestionScreens.module.css [app-ssr] (css module)");
"use client";
;
;
;
const DEFAULTS = {
    dailyVolume: 200,
    showerShare: 40
};
function PredictScreen({ step, initialValue, onSubmit }) {
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialValue ?? DEFAULTS[step.id] ?? 0);
    const [touched, setTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initialValue !== undefined) {
            setValue(initialValue);
        }
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].screen,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepLabel,
                            children: "Predict"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PredictScreen.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepCounter,
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].main,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].prompt,
                            children: step.prompt
                        }, void 0, false, {
                            fileName: "[project]/src/components/PredictScreen.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].form,
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sliderRow,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: min,
                                            max: max,
                                            step: step.id === "showerShare" ? 1 : 10,
                                            value: value,
                                            onChange: handleChange,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slider,
                                            "aria-label": step.prompt
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PredictScreen.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].valueBubble,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].valueNumber,
                                                    children: Math.round(value).toLocaleString()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/PredictScreen.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].valueUnits,
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
                                touched && !isValid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].validation,
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].primaryButton,
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
}),
"[project]/src/components/RevealScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RevealScreen",
    ()=>RevealScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/QuestionScreens.module.css [app-ssr] (css module)");
"use client";
;
;
;
function RevealScreen({ step, answerValue, isLastStep, onNext }) {
    const { reveal } = step;
    const [animate, setAnimate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const frame = requestAnimationFrame(()=>setAnimate(true));
        return ()=>cancelAnimationFrame(frame);
    }, [
        step.id
    ]);
    const maxBar = reveal.maxValue || Math.max(reveal.actualValue, answerValue);
    const actualRatio = Math.min(reveal.actualValue / maxBar, 1);
    const guessRatio = Math.min(answerValue / maxBar, 1);
    const titleValue = step.id === "showerShare" ? `${reveal.actualValue.toFixed(0)}%` : `${reveal.actualValue.toLocaleString()} L / day`;
    const labelGuess = step.id === "showerShare" ? `${answerValue.toFixed(0)}%` : `${answerValue.toLocaleString()} L`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].screen,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepLabel,
                            children: "Reveal"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RevealScreen.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepCounter,
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].main,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].prompt,
                            children: step.prompt
                        }, void 0, false, {
                            fileName: "[project]/src/components/RevealScreen.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chartCard,
                            "aria-label": "Your guess vs data",
                            children: [
                                reveal.chartType === "bar" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barChart,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barLabel,
                                                    children: "Your guess"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RevealScreen.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barTrack,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barFill} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barGuess} ${animate ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barFillVisible : ""}`,
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barValue,
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barRow,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barLabel,
                                                    children: "Typical value"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RevealScreen.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barTrack,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barFill} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barActual} ${animate ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barFillVisible : ""}`,
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barValue,
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
                                reveal.chartType === "split" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].splitBarWrapper,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].splitLegend,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendItem,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendSwatch} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].swatchGuess}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RevealScreen.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendItem,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].legendSwatch} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].swatchActual}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RevealScreen.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].splitBars,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].splitRow,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barLabel,
                                                            children: "Showers"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RevealScreen.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].splitTrack,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].splitFill} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barGuess} ${animate ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barFillVisible : ""}`,
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barValue,
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].splitRow,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barLabel,
                                                            children: "Showers (data)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/RevealScreen.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].splitTrack,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].splitFill} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barActual} ${animate ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barFillVisible : ""}`,
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barValue,
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contextSection,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contextHeadline,
                                    children: titleValue
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RevealScreen.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contextBody,
                                    children: reveal.context(answerValue)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RevealScreen.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                reveal.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contextSubtitle,
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onNext,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].primaryButton,
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
}),
"[project]/src/components/SummaryScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SummaryScreen",
    ()=>SummaryScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/QuestionScreens.module.css [app-ssr] (css module)");
;
;
function SummaryScreen({ steps, answers, onRestart }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].screen,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inner,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepLabel,
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].main,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].prompt,
                            children: "Your intuition vs. everyday water reality"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SummaryScreen.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].summaryGrid,
                            children: steps.map((step)=>{
                                const answer = answers.find((a)=>a.stepId === step.id);
                                const actual = step.reveal.actualValue;
                                const labelUnits = step.id === "showerShare" ? "%" : "L / day";
                                const userValue = answer?.value ?? 0;
                                const max = step.id === "showerShare" ? 100 : step.reveal.maxValue;
                                const actualRatio = Math.min(actual / max, 1);
                                const guessRatio = Math.min(userValue / max, 1);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].summaryCard,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].summaryTitle,
                                            children: step.prompt
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SummaryScreen.tsx",
                                            lineNumber: 40,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].summaryChart,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barRow,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barLabel,
                                                            children: "You guessed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SummaryScreen.tsx",
                                                            lineNumber: 43,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barTrack,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barFill} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barGuess} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barFillVisible}`,
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barValue,
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barRow,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barLabel,
                                                            children: "Typical value"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SummaryScreen.tsx",
                                                            lineNumber: 57,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barTrack,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barFill} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barActual} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barFillVisible}`,
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barValue,
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contextSection,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contextBody,
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footer,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onRestart,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionScreens$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secondaryButton,
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
}),
"[project]/src/components/QuestionFlow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuestionFlow",
    ()=>QuestionFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/questions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PredictScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PredictScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RevealScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RevealScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SummaryScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SummaryScreen.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function QuestionFlow() {
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("predict");
    const [stepIndex, setStepIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const currentStep = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["questionSteps"][stepIndex];
    const currentAnswer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!currentStep) return undefined;
        return answers.find((a)=>a.stepId === currentStep.id);
    }, [
        answers,
        currentStep
    ]);
    if (!currentStep && mode !== "summary") {
        return null;
    }
    const isLastStep = stepIndex === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["questionSteps"].length - 1;
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SummaryScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SummaryScreen"], {
            steps: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$questions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["questionSteps"],
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PredictScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PredictScreen"], {
            step: currentStep,
            onSubmit: handleAnswerSubmit,
            initialValue: currentAnswer?.value
        }, void 0, false, {
            fileName: "[project]/src/components/QuestionFlow.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RevealScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RevealScreen"], {
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
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2d745dbd._.js.map