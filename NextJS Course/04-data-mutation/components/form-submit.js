"use client"
import { useFormStatus } from "react-dom";

export default function FormSubmitting() {
  const status = useFormStatus();

  if (status.pending) {
    return <p>Loading...</p>
  }

  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  )
}