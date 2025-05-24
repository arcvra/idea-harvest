"use client"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { usePostForm } from "@/lib/useFormHandler";

export const PostForm = () => {

    const {
        conceptValue,
        descriptionValue,
        handleConceptInput,
        handleDescriptionInput,
        handleSubmit
    } = usePostForm();

    return (
        <form onSubmit={handleSubmit} >
            <Input
                placeholder="What are you thinking about?"
                value={conceptValue}
                name="conceptInput"
                id="conceptInput"
                required={true}
                onChange={handleConceptInput} />
            <Input
                placeholder="Want to elaborate?"
                value={descriptionValue}
                name="descriptionInput"
                id="descriptionInput"
                onChange={handleDescriptionInput} />
            <Button
                type="submit"
                name="postIdea"
                id="postIdea"
                children="Post idea"
            />
        </form>
    )
}