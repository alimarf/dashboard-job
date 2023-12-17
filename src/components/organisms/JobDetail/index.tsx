import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { PartyPopperIcon } from "lucide-react";
import React, { FC } from "react";

interface JobDetailProps {}

const JobDetail: FC<JobDetailProps> = ({}) => {
  return (
    <div>
      <div className="grid w-full grid-cols-3 gap-5">
        <div className="col-span-2 space-y-10">
          <div className="text-3xl font-semibold">Description</div>
          <div className="mt-3 text-gray-500">
            <p>
              Lorem ipsum sidulur ametjdiwaidj Lorem ipsum sidulur ametjdiwaidj
              Lorem ipsum sidulur ametjdiwaidj Lorem ipsum sidulur ametjdiwaidj
              Lorem ipsum sidulur ametjdiwaidj Lorem ipsum sidulur ametjdiwaidj
              Lorem ipsum sidulur ametjdiwaidj
            </p>
          </div>

          <div className="text-3xl font-semibold">Responsibilities</div>
          <div className="mt-3 text-gray-500">
            <p>
              Lorem ipsum sidulur ametjdiwaidj Lorem ipsum sidulur ametjdiwaidj
              Lorem ipsum sidulur ametjdiwaidj Lorem ipsum sidulur ametjdiwaidj
              Lorem ipsum sidulur ametjdiwaidj Lorem ipsum sidulur ametjdiwaidj
              Lorem ipsum sidulur ametjdiwaidj
            </p>
          </div>

          <div className="text-3xl font-semibold">Who You Are</div>
          <div className="mt-3 text-gray-500">
            <p>
              Lorem ipsum sidulur ametjdiwaidj Lorem ipsum sidulur ametjdiwaidj
              Lorem ipsum sidulur ametjdiwaidj Lorem ipsum sidulur ametjdiwaidj
              Lorem ipsum sidulur ametjdiwaidj Lorem ipsum sidulur ametjdiwaidj
              Lorem ipsum sidulur ametjdiwaidj
            </p>
          </div>

          <div className="text-3xl font-semibold">Nice-To-Haves</div>
          <div className="mt-3 text-gray-500">
            <p>
              Lorem ipsum sidulur ametjdiwaidj Lorem ipsum sidulur ametjdiwaidj
              Lorem ipsum sidulur ametjdiwaidj Lorem ipsum sidulur ametjdiwaidj
              Lorem ipsum sidulur ametjdiwaidj Lorem ipsum sidulur ametjdiwaidj
              Lorem ipsum sidulur ametjdiwaidj
            </p>
          </div>
        </div>

        <div>
          <div className="text-3xl font-semibold">About this role</div>

          <div className="p-3 my-6 text-center shadow">
            1 <span className="text-gray-500">of 10 capacity</span>
            <Progress className="mt-3" value={10} />
          </div>

          <div className="mb-10 space-y-5">
            <div className="flex justify-between">
              <div className="text-gray-500">Apply Before</div>
              <div className="font-semibold">12 July 2023</div>
            </div>

            <div className="flex justify-between">
              <div className="text-gray-500">Job Posted On</div>
              <div className="font-semibold">12 July 2023</div>
            </div>

            <div className="flex justify-between">
              <div className="text-gray-500">Job Type</div>
              <div className="font-semibold">Full-time</div>
            </div>

            <div className="flex justify-between">
              <div className="text-gray-500">Salary</div>
              <div className="font-semibold">$100 - $1000 USD</div>
            </div>
          </div>

          <Separator />

          <div className="my-10">
            <div className="mb-4 text-3xl font-semibold">Category</div>

            <div className="space-x-5">
              <Badge>Design</Badge>
            </div>
          </div>

          <Separator />

          <div className="my-10">
            <div className="mb-4 text-3xl font-semibold">Required Skills</div>

            <div className="space-x-5">
              {["HTML", "TYPESCRIPT"].map((item: string, i: number) => (
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
          {[0, 1, 2].map((item: number) => (
            <div key={item}>
              <PartyPopperIcon className="w-10 h-10 mb-6 text-primary" />

              <div className="mb-3 text-lg font-semibold">Full Healthcare</div>
              <div className="text-gray-500">
                We believe in trhiving lorem ipsum sidloro amet hiving lorem
                ipsum sidloro amet
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
