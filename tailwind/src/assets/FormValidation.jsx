import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
export function FormValidation() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    tel: "",
    country: "",
    address: "",
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const mySubmit = (data) => {
    setUserData((prev) => {
      return {
        ...prev,
        ...data,
      };
    });
    reset();
  };
  useEffect(() => {
    // console.log(userData);
  }, [userData]);

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit(mySubmit)}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="form-name">Name</FieldLabel>
          <Input
            id="form-name"
            type="text"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
              maxLength: {
                value: 20,
                message: "Name cannot exceed 20 characters",
              },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Only letters and spaces are allowed",
              },
            })}
            placeholder="Evil Rabbit"
          />
          {errors.name ? (
            <p className="text-xs text-red-500"> {errors.name.message}</p>
          ) : (
            <p className="text-xs text-muted-foreground">
              Name must be 3–20 characters long and contain only letters.
            </p>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="form-email">Email</FieldLabel>
          <Input
            id="form-email"
            type="text"
            {...register("email", {
              required: "Email is required",
              minLength: {
                value: 3,
                message: "Email must be at least 3 characters",
              },
              maxLength: {
                value: 20,
                message: "Email cannot exceed 20 characters",
              },
              pattern: {
                value:
                  /^(?!.*\.\.)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Please enter a valid email address",
              },
            })}
            placeholder="john@example.com"
          />{" "}
          {errors.email ? (
            <p className="text-xs text-red-500"> {errors.email.message}</p>
          ) : (
            <FieldDescription>
              We&apos;ll never share your email with anyone.
            </FieldDescription>
          )}
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
            <Input id="form-phone" type="tel" placeholder="+1 (555) 123-4567" />
          </Field>
          <Field>
            <FieldLabel htmlFor="form-country">Country</FieldLabel>
            <Select defaultValue="us">
              <SelectTrigger id="form-country">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="form-address">Address</FieldLabel>
          <Input id="form-address" type="text" placeholder="123 Main St" />
        </Field>
        <Field orientation="horizontal">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Loading..." : "Submit"}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
