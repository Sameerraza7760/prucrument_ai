import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import React, { useState } from "react";

export default function ProjectProposalForm() {
  const [date, setDate] = useState();

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg shadow">
      <div className="text-left font-sans">
        <h2 className="text-2xl font-semibold">Project Proposal</h2>
        <p className="text-sm text-gray-400 mb-6">
          Create a new project proposal
        </p>
      </div>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title */}
        <div className="space-y-2 ">
          <Label htmlFor="title" className="text-gray-600">
            Title *
          </Label>
          <Input id="title" placeholder="Enter Title" />
        </div>

        {/* Issued By */}
        <div className="space-y-2">
          <Label htmlFor="issuedBy" className="text-gray-600">
            Issued by *
          </Label>
          <Input id="issuedBy" placeholder="Enter issued by" />
        </div>

        {/* Issue Date */}
        <div className="space-y-2">
          <Label htmlFor="issueDate" className="text-gray-600">
            Issue Date *
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Select an Issue Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="introduction" className="text-gray-600">
            Introduction *
          </Label>
          <Textarea id="introduction" placeholder="Enter Introduction" />
        </div>

        {/* Scope of Work */}
        <div className="space-y-2">
          <Label htmlFor="scopeOfWork" className="text-gray-600">
            Scope of Work *
          </Label>
          <Textarea id="scopeOfWork" placeholder="Enter Scope of Work" />
        </div>

        <div className="space-y-2">
          <Label className="text-gray-600" htmlFor="technicalRequirements">
            Technical Requirements *
          </Label>
          <Textarea
            id="technicalRequirements"
            placeholder="Enter Technical Requirements"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-gray-600" htmlFor="submissionGuidelines">
            Submission Guidelines *
          </Label>
          <Textarea
            id="submissionGuidelines"
            placeholder="Enter Submission Guidelines"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-gray-600" htmlFor="evaluationCriteria">
            Evaluation Criteria *
          </Label>
          <Textarea
            id="evaluationCriteria"
            placeholder="Enter Evaluation Criteria"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-gray-600" htmlFor="timeline">
            Timeline *
          </Label>
          <Input id="timeline" placeholder="Enter Timeline" />
        </div>

        <div className="space-y-2">
          <Label className="text-gray-600" htmlFor="budgetRange">
            Budget Range *
          </Label>
          <Input id="budgetRange" placeholder="Enter Budget Range" />
        </div>

        <div className="space-y-2">
          <Label className="text-gray-600" htmlFor="terms">
            Terms and Conditions *
          </Label>
          <Textarea id="terms" placeholder="Enter Terms and Conditions" />
        </div>

        <div className="space-y-2">
          <Label className="text-gray-600" htmlFor="contactInfo">
            Contact Info *
          </Label>
          <Input id="contactInfo" placeholder="Enter Contact Info" />
        </div>

        {/* Submit Button */}
        <div className="col-span-full">
          <div className="flex gap-1.5 flex-row justify-end">
            <Button variant={'outline'} className="w-[11%] bg-gray-200 p-5">Cancel</Button>
            <Button type="submit" className="w-[13%] bg-orange-600 p-5">
              Create
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
