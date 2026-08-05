import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button btn-premium inline-flex max-w-full shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-semibold tracking-wide whitespace-nowrap outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-[#134377] text-white hover:bg-[#0e3259] shadow-md",
        outline:
          "border-[#134377] text-[#134377] bg-background hover:bg-[#134377]/10 aria-expanded:bg-[#134377]/10",
        secondary:
          "bg-[#134377] text-white hover:bg-[#0e3259] shadow-md",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-[#134377] underline-offset-4 hover:underline",
        glass: "btn-glass hover:text-foreground",
        accent:
          "bg-[#134377] text-white font-semibold hover:bg-[#0e3259] shadow-md focus-visible:ring-[#134377]/40",
        whatsapp:
          "bg-[#5CA548] text-white shadow-md hover:bg-[#4a883a] focus-visible:ring-[#5CA548]/40",
        emergency:
          "bg-[#134377] text-white shadow-md hover:bg-[#0e3259] focus-visible:ring-[#134377]/40",
      },
      size: {
        default:
          "h-10 gap-1.5 px-5 rounded-full has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        xs: "h-7 gap-1 rounded-full px-3 text-xs in-data-[slot=button-group]:rounded-full has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-full px-3.5 text-xs in-data-[slot=button-group]:rounded-full has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-11 gap-1.5 px-6 rounded-full has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        cta: "h-11 gap-2 rounded-full px-7 text-sm font-semibold has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4 [&_svg:not([class*='size-'])]:size-5",
        "cta-lg":
          "h-12 gap-2.5 rounded-full px-8 text-base font-semibold has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5 [&_svg:not([class*='size-'])]:size-5",
        icon: "size-9 rounded-full",
        "icon-touch": "size-11 rounded-full [&_svg:not([class*='size-'])]:size-5",
        "icon-xs":
          "size-6 rounded-full in-data-[slot=button-group]:rounded-full [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-full in-data-[slot=button-group]:rounded-full [&_svg:not([class*='size-'])]:size-3.5",
        "icon-lg": "size-10 rounded-full [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  render,
  ...props
}: React.ComponentProps<typeof ButtonPrimitive> &
  VariantProps<typeof buttonVariants> & {
    render?: React.ReactElement
  }) {
  return (
    <ButtonPrimitive
      render={render}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
