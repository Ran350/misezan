import { ScrollArea } from "@/components/ui/scroll-area";
import { FC } from "react";

type Props = {
  answers: string[];
};

export const Answer: FC<Props> = ({ answers }) => {
  if (answers.length === 0) {
    return <p>no answer</p>;
  }

  return (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <p>found {answers.length} answer(s)</p>

      {answers.map((answer, i) => (
        <div key={i}>
          <p>{answer}</p>
        </div>
      ))}
    </ScrollArea>
  );
};
