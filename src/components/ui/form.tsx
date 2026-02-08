import * as React from "react"
import { View, Text, StyleSheet } from "react-native"
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"

// We use standard Views instead of Radix Slots
const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

const FormItem = React.forwardRef<View, any>(({ style, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <View ref={ref} style={[styles.formItem, style]} {...props} />
    </FormItemContext.Provider>
  )
})

const FormLabel = React.forwardRef<Text, any>(({ style, ...props }, ref) => {
  const { error } = useFormField()

  return (
    <Text
      ref={ref}
      style={[styles.label, error && styles.labelError, style]}
      {...props}
    />
  )
})

const FormControl = React.forwardRef<View, any>(({ ...props }, ref) => {
  return <View ref={ref} {...props} />
})

const FormDescription = React.forwardRef<Text, any>(({ style, ...props }, ref) => {
  return <Text ref={ref} style={[styles.description, style]} {...props} />
})

const FormMessage = React.forwardRef<Text, any>(({ style, children, ...props }, ref) => {
  const { error } = useFormField()
  const body = error ? String(error?.message ?? "") : children

  if (!body) return null

  return (
    <Text ref={ref} style={[styles.message, style]} {...props}>
      {body}
    </Text>
  )
})

const styles = StyleSheet.create({
  formItem: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 8,
  },
  labelError: {
    color: '#ef4444', // destructive red
  },
  description: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 4,
  },
  message: {
    fontSize: 12,
    fontWeight: '500',
    color: '#ef4444',
    marginTop: 4,
  },
})

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}