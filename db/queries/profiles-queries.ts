import { eq } from "drizzle-orm";
import { db } from "../db";
import { InsertProfile, profilesTable } from "../schema";

// 1. CRUD - Create
export const createProfile = async (data: InsertProfile) => {
    try {
        const [newProfile] = await db.insert(profilesTable).values(data).returning();
        return newProfile;
    } catch (error) {
        console.error("Error creating profile", error);
        throw new Error("Failed to create profile")

    }
    
}

// 2. CRUD - Read
export const getProfileByUserId = async (userId: string) => {
    try {
        const profile = await db.query.profiles.findFirst({
            where: eq(profilesTable.userId, userId)
        })
        return profile
    } catch (error) {
        console.error("Error creating profile", error);
        throw new Error("Failed to create profile")
    }


}

// 1. CRUD - Update
export const updateProfileByUserId = async (
    userId: string,
    data: Partial<InsertProfile>
 ) => {
    try {
        const [updatedProfile] = await db
            .update(profilesTable)
            .set(data)
            .where(eq(profilesTable.userId, userId))
            .returning();
        return updatedProfile
    } catch (error) {
        console.error("Error creating profile", error);
        throw new Error("Failed to create profile")
    }

} 

// 1. CRUD - Delete
export const deleteProfileByUserId = async (userId: string) => {
    try {
        await db.delete(profilesTable).where(eq(profilesTable.userId, userId))
    } catch (error) {
        console.error("Error creating profile", error);
        throw new Error("Failed to create profile")
    }
}