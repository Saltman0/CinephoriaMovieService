import * as categoryFactory from "../factory/category.factory";
import {database} from "../config/database";
import {eq} from "drizzle-orm/sql/expressions/conditions";
import {asc} from "drizzle-orm/sql/expressions/select";
import {category} from "../schema/category";

export async function findCategories() {
    try {
        return await database
            .select()
            .from(category)
            .orderBy(asc(category.id));
    } catch (error) {
        throw error;
    }
}

export async function findCategoryById(id: number) {
    try {
        const result = await database
            .select()
            .from(category)
            .where(eq(category.id, id));

        if (result.length === 0) {
            return null;
        }

        return result[0];
    } catch (error) {
        throw error;
    }
}

export async function insertCategory(name: string) {
    try {
        const preparedInsertCategory = await database
            .insert(category)
            .values(categoryFactory.createCategory(name))
            .returning();

        return preparedInsertCategory[0];
    } catch (error) {
        throw error;
    }
}

export async function updateCategory(id: number, name: string) {
    try {
        const preparedUpdateCategory = await database
            .update(category)
            .set({name: name})
            .where(eq(category.id, id))
            .returning();

        return preparedUpdateCategory[0];
    } catch (error) {
        throw error;
    }
}

export async function deleteCategory(id: number) {
    try {
        const preparedDeleteCategory = await database
            .delete(category)
            .where(eq(category.id, id))
            .returning({id: category.id});

        return preparedDeleteCategory[0];
    } catch (error) {
        throw error;
    }
}