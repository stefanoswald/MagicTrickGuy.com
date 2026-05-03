import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  date: z.string().optional(),
  eventType: z.string({
    required_error: "Please select an event type",
  }),
  location: z.string().optional(),
  guests: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Please provide some details about your event"),
});

type FormValues = z.infer<typeof formSchema>;

export function BookingForm() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      eventType: "",
      location: "",
      guests: "",
      budget: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    toast({
      title: "Inquiry Sent Successfully",
      description: "We'll get back to you within 24 hours.",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground uppercase text-xs tracking-widest font-accent">Name *</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" className="bg-card/50 border-border rounded-none h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground uppercase text-xs tracking-widest font-accent">Email *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@company.com" className="bg-card/50 border-border rounded-none h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground uppercase text-xs tracking-widest font-accent">Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="(555) 123-4567" className="bg-card/50 border-border rounded-none h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground uppercase text-xs tracking-widest font-accent">Event Date</FormLabel>
                <FormControl>
                  <Input type="date" className="bg-card/50 border-border rounded-none h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eventType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground uppercase text-xs tracking-widest font-accent">Event Type *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-card/50 border-border rounded-none h-12">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="rounded-none border-border">
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="tradeshow">Trade Show</SelectItem>
                    <SelectItem value="keynote">Keynote / Speaking</SelectItem>
                    <SelectItem value="mastermind">Mastermind</SelectItem>
                    <SelectItem value="private">Private Event</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground uppercase text-xs tracking-widest font-accent">Event Location (City, State)</FormLabel>
                <FormControl>
                  <Input placeholder="Orlando, FL" className="bg-card/50 border-border rounded-none h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="guests"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground uppercase text-xs tracking-widest font-accent">Expected Guest Count</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. 200" className="bg-card/50 border-border rounded-none h-12" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground uppercase text-xs tracking-widest font-accent">Entertainment Budget</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-card/50 border-border rounded-none h-12">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="rounded-none border-border">
                    <SelectItem value="1500-3000">$1,500 - $3,000</SelectItem>
                    <SelectItem value="3000-5000">$3,000 - $5,000</SelectItem>
                    <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10000+">$10,000+</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground uppercase text-xs tracking-widest font-accent">Tell us about your event *</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="What kind of vibe are you going for? What's the goal of the event?" 
                  className="bg-card/50 border-border rounded-none min-h-[120px] resize-y" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-12 rounded-none tracking-wide h-14 text-lg">
          SUBMIT INQUIRY
        </Button>
      </form>
    </Form>
  );
}
