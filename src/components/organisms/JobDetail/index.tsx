import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { dateFormat } from "@/lib/utils";
import { CategoryJob, Job } from "@prisma/client";
import { PartyPopperIcon } from "lucide-react";
import React, { FC } from "react";

type JobDetailType = {
  CategoryJob: CategoryJob | null;
} & Job;

interface JobDetailProps {
  detail: JobDetailType | null;
}

const JobDetail: FC<JobDetailProps> = ({ detail }) => {
  const benefits: any = detail?.benefits;

  return (
    <div>
      <div className="grid w-full grid-cols-3 gap-5">
        <div className="col-span-2 space-y-10">
          <div className="text-3xl font-semibold">Description</div>
          <div
            className="mt-3 text-gray-500"
            dangerouslySetInnerHTML={{ __html: detail?.description!! }}
          ></div>

          <div className="text-3xl font-semibold">Responsibilities</div>
          <div
            className="mt-3 text-gray-500"
            dangerouslySetInnerHTML={{ __html: detail?.responsibility!! }}
          ></div>

          <div className="text-3xl font-semibold">Who You Are</div>
          <div
            className="mt-3 text-gray-500"
            dangerouslySetInnerHTML={{ __html: detail?.whoYouAre!! }}
          ></div>

          <div className="text-3xl font-semibold">Nice-To-Haves</div>
          <div
            className="mt-3 text-gray-500"
            dangerouslySetInnerHTML={{ __html: detail?.niceToHaves!! }}
          ></div>
        </div>

        <div>
          <div className="text-3xl font-semibold">About this role</div>

          <div className="p-3 my-6 text-center shadow">
            1 <span className="text-gray-500">of {detail?.needs} capacity</span>
            <Progress
              className="mt-3"
              value={(detail?.applicants || 0) / (detail?.needs || 0) / 100}
            />
          </div>

          <div className="mb-10 space-y-5">
            <div className="flex justify-between">
              <div className="text-gray-500">Apply Before</div>
              <div className="font-semibold">{dateFormat(detail?.dueDate)}</div>
            </div>

            <div className="flex justify-between">
              <div className="text-gray-500">Job Posted On</div>
              <div className="font-semibold">
                {dateFormat(detail?.datePosted)}
              </div>
            </div>

            <div className="flex justify-between">
              <div className="text-gray-500">Job Type</div>
              <div className="font-semibold">{detail?.jobType}</div>
            </div>

            <div className="flex justify-between">
              <div className="text-gray-500">Salary</div>
              <div className="font-semibold">
                ${detail?.salaryFrom} - ${detail?.salaryTo} USD
              </div>
            </div>
          </div>

          <Separator />

          <div className="my-10">
            <div className="mb-4 text-3xl font-semibold">Category</div>

            <div className="space-x-5">
              <Badge>{detail?.CategoryJob?.name}</Badge>
            </div>
          </div>

          <Separator />

          <div className="my-10">
            <div className="mb-4 text-3xl font-semibold">Required Skills</div>

            <div className="space-x-5">
              {detail?.requiredSkills.map((item: string, i: number) => (
                <Badge variant={"outline"} key={i}>
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-8" />
      <div>
        <div className="text-3xl font-semibold">Perks & Benefits</div>
        <div className="text-gray-500">
          This job comes with several perks and benefits
        </div>

        <div className="grid grid-cols-4 gap-5 mt-9">
          {benefits.map((item: any) => (
            <div key={item}>
              <PartyPopperIcon className="w-10 h-10 mb-6 text-primary" />

              <div className="mb-3 text-lg font-semibold">{item.benefit}</div>
              <div className="text-gray-500">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
