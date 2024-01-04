import { ScrollArea } from "@/components/ui/scroll-area";
import { FC } from "react";

type Props = {
  answers: string[] | "invalid";
};

const Inner: FC<Props> = ({ answers }) => {
  if (answers === "invalid") {
    return (
      <p className="text-center text-gray-500">1桁の数字を入力してください</p>
    );
  }
  if (answers.length === 0) {
    return <p className="text-center">no answer</p>;
  }
  return (
    <ScrollArea className="px-16 md:px-[30%] h-80">
      <p className="w-full mb-2 font-bold">found {answers.length} answer(s)</p>
      {answers.map((answer, i) => (
        <div key={i} className="w-full">
          <p>{answer}</p>
        </div>
      ))}
    </ScrollArea>
  );
};

export const Answer: FC<Props> = (props) => (
  <div className="w-full h-80">
    <Inner {...props} />
  </div>
);
