import { ScrollArea } from "@/components/ui/scroll-area";
import { FC } from "react";

type Props = {
  answers: string[];
};

export const Answer: FC<Props> = ({ answers }) => {
  return (
    <div className="w-full min-h-96 ">
      {answers.length === 0 ? (
        <p className="text-center">no answer</p>
      ) : (
        <ScrollArea className="px-20 md:px-[30%] h-96">
          <p className="w-full mb-2 font-bold">
            found {answers.length} answer(s)
          </p>
          {answers.map((answer, i) => (
            <div key={i} className="w-full">
              <p>{answer}</p>
            </div>
          ))}
        </ScrollArea>
      )}
    </div>
  );
};
