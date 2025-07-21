"use server"

import { createProfile, getProfileByUserId } from "@/db/queries/profiles-queries";
import { InsertProfile, SelectProfile } from "@/db/schema";
import { ActionState } from "@/types";
import { revalidatePath } from "next/cache";

export async function createProfileAction(
    data: InsertProfile
): Promise<ActionState<SelectProfile>> {
    try {
        const newProfile = await createProfile(data)
        revalidatePath("/")
        return {
            isSuccess: true,
            message: "Profile created successfuly",
            data: newProfile
        }
    } catch (error) {
        console.error("Error creating profile", error)
        return { isSuccess: false, message: "Error creating the profile"}
    }

}

export async function getProfileByUserIdAction (
    userId: string
): Promise<ActionState<SelectProfile>> {
    try {
        const profile = await getProfileByUserId(userId)
        return {
            isSuccess: true,
            message: "Profile fetched successfuly",
            data: profile
        }
    } catch (error) {
        console.error("Error getting  profile by user id", error)
        return { isSuccess: false, message: "Error fetching the profile" }
    }
} 