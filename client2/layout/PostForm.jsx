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
        <form onSubmit={handleSubmit} className="grid px-2 py-5 border border-violet-950 rounded-2xl shadow shadow-neutral-400">
            <Input
                placeholder="What are you thinking about?"
                value={conceptValue}
                name="conceptInput"
                id="conceptInput"
                required={true}
                onChange={handleConceptInput} 
                className="m-3"
                />
            <Input
                placeholder="Want to elaborate?"
                value={descriptionValue}
                name="descriptionInput"
                id="descriptionInput"
                onChange={handleDescriptionInput} 
                className="m-3"
                />
            <Button
                type="submit"
                name="postIdea"
                id="postIdea"
                children="Post idea"
                className="justify-self-center"
            />
        </form>
    )
}