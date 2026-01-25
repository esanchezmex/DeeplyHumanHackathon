import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";
import { AI_AGENT_SYSTEM_PROMPT, buildUserPrompt } from "@/prompts/aiAgentSystemPrompt";

// Initialize the OpenAI client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
    // Check if API key is configured
    if (!process.env.OPENAI_API_KEY) {
        console.error("OPENAI_API_KEY is not set in environment variables");
        return NextResponse.json(
            { error: "API key not configured. Please set OPENAI_API_KEY in .env.local" },
            { status: 500 }
        );
    }

    try {
        const body = await request.json();
        const { mood, electricityExpectation, synthesisReflection } = body;

        console.log("Received request with:", { mood, electricityExpectation, synthesisReflection: synthesisReflection?.substring(0, 50) });

        // Validate required fields
        if (!mood && !electricityExpectation && !synthesisReflection) {
            return NextResponse.json(
                { error: "At least one user response is required" },
                { status: 400 }
            );
        }

        // Build the user prompt with their responses
        const userPrompt = buildUserPrompt({
            mood: mood || "No response provided",
            electricityExpectation: electricityExpectation || "No response provided",
            synthesisReflection: synthesisReflection || "",
        });

        console.log("Calling OpenAI API...");

        // Use GPT-4o for best quality responses
        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: AI_AGENT_SYSTEM_PROMPT },
                { role: "user", content: userPrompt },
            ],
            max_tokens: 500,
            temperature: 0.8,
        });

        const text = completion.choices[0]?.message?.content || "";
        console.log("OpenAI response received successfully");

        return NextResponse.json({ reflection: text });
    } catch (error: unknown) {
        console.error("Error generating AI reflection:");
        console.error("Error type:", typeof error);
        console.error("Error details:", error);

        // Check for specific OpenAI error types
        if (error instanceof OpenAI.APIError) {
            console.error("OpenAI API Error - Status:", error.status);
            console.error("OpenAI API Error - Message:", error.message);
            return NextResponse.json(
                { error: `OpenAI API Error: ${error.message}` },
                { status: error.status || 500 }
            );
        }

        return NextResponse.json(
            { error: "Failed to generate reflection. Please try again." },
            { status: 500 }
        );
    }
}
