import FieldInput from "@/components/organisms/FieldInput";
import { InstagramIcon, LinkedinIcon } from "lucide-react";
import React, { FC } from "react";
import DialogAddTeam from "./DialogAddForm";

interface TeamFormProps {}

const TeamForm: FC<TeamFormProps> = ({}) => {
  return (
    <FieldInput
      title="Basic Information"
      subtitle="Add team members of your company"
    >
      <div className="w-[65%] mb-5">
        <div className="flex flex-row items-center justify-between">
          <div className="text-lg font-semibold">2 Members</div>
          <DialogAddTeam />
        </div>

        <div className="grid grid-cols-3 gap-5 mt-6">
          {[0, 1, 2].map((item: number) => (
            <div key={item} className="p-3 text-center shadow">
              <div className="mx-auto bg-gray-300 rounded-full w-14 h-14"></div>
              <div className="mt-4 font-semibold">Alim Arief</div>
              <div className="text-sm text-gray-500">Software Engineer</div>

              <div className="inline-flex gap-3 mx-auto mt-5 text-gray-500">
                <InstagramIcon className="w-4 h-4" />
                <LinkedinIcon className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </FieldInput>
  );
};

export default TeamForm;
