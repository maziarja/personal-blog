"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { CircleCheckIcon, InfoIcon } from "lucide-react";

function Form() {
  const [error, setError] = useState("");
  const [subscribe, setSubscribe] = useState("");

  function checkEmailValidation(value: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ((value === "" || !emailRegex.test(value)) && !subscribe) {
      setError("Please enter a valid email address.");
      return false;
    } else {
      setError("");
      return true;
    }
  }

  function handleSubmitForm(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const validEmail = checkEmailValidation(email as string);
    if (validEmail) {
      setSubscribe("You're subscribed! Check you inbox for updates.");
    } else {
      setSubscribe("");
    }
  }

  function handleChangeInput(
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) {
    const value = e.target.value;
    checkEmailValidation(value);
  }

  return (
    <div className="space-y-2">
      <form onSubmit={handleSubmitForm} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-preset-7!">
            Email Address
          </Label>
          <Input
            type="text"
            name="email"
            id="email"
            onChange={handleChangeInput}
            placeholder="email@example.com"
            className={`text-preset-7! text-card-foreground ${subscribe ? "border-success" : ""}`}
          />
          {error && (
            <div className="mt-1 flex items-center gap-1.5">
              <InfoIcon size={16} className="stroke-destructive" />
              <p className="text-preset-8 text-destructive">{error}</p>
            </div>
          )}
          {subscribe && (
            <div className="mt-1 flex items-center gap-1.5">
              <CircleCheckIcon size={16} className="stroke-success" />
              <p className="text-preset-8 text-success">{subscribe}</p>
            </div>
          )}
        </div>
        <Button type="submit" size={"lg"}>
          <span className="text-preset-7">Stay updated</span>
        </Button>
      </form>
      <p className="text-preset-8 text-card-foreground">
        Unsubscribe anytime. No spam, I promise 🙂
      </p>
    </div>
  );
}

export default Form;
