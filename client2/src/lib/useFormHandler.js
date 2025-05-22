import { useState } from "react";
import { postIdea } from "@/lib/newIdea";

/**
 * Custom React hook for handling form state and submission logic for posting an idea
 *
 * @returns {{
 *   conceptValue: string,
 *   descriptionValue: string,
 *   categoryValue: string,
 *   handleConceptInput: function,
 *   handleDescriptionInput: function,
 *   handleCategoryInput: function,
 *   handleClick: function
 * }} - An object containing form values and handlers
 */

export const usePostForm = () => {
    const [conceptValue, setConceptValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");
    const [categoryValue, setCategoryValue] = useState("");

    const handleConceptInput = (e) => setConceptValue(e.target.value);
    const handleDescriptionInput = (e) => setDescriptionValue(e.target.value);
    const handleCategoryInput = (e) => setCategoryValue(e.target.value);

    /**
     * Handles form submission logic
     * Assigns concept, description and category input values
     * Updates DB data using postIdea util
     */
    const handleClick = () => {

        const title = conceptValue || null;
        const description = descriptionValue || null;
        const category = categoryValue || null;

        // Sends form data to backend
        postIdea(title, description, category);

        // Clears input values for a fresh new start
        setConceptValue("");
        setDescriptionValue("");
        setCategoryValue("");
    }

    return {
        conceptValue,
        descriptionValue,
        categoryValue,
        handleConceptInput,
        handleDescriptionInput,
        handleCategoryInput,
        handleClick
    };
}