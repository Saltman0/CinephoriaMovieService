import { Request, Response } from "express";
import * as categoryRepository from "../repository/category.repository";

export async function getCategories(req: Request, res: Response) {
    try {
        const categories = await categoryRepository.findCategories();

        res.status(200).json(categories);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function getCategoryById(req: Request, res: Response) {
    try {
        const category = await categoryRepository.findCategoryById(
            parseInt(req.params.categoryId)
        );

        res.status(200).json(category);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function createCategory(req: Request, res: Response) {
    try {
        const categoryToCreate = await categoryRepository.insertCategory(req.body.name);

        res.status(201).json(categoryToCreate);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function updateCategory(req: Request, res: Response) {
    try {
        const categoryToUpdate = await categoryRepository.updateCategory(
            parseInt(req.params.categoryId),
            req.body.name,
        );

        res.status(200).json(categoryToUpdate);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export async function deleteCategory(req: Request, res: Response) {
    try {
        await categoryRepository.deleteCategory(parseInt(req.params.categoryId));

        res.status(200).json({ message: "Category deleted successfully." });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
}
