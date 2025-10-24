import { useDecreaseCount, useIncreaseCount } from "@/store/count";
import { Button } from "../ui/button";

export default function Controller() {
  // 이렇게 호출하면 store 내부의 모든 state들을 불러오는 것이기 때문에 리렌더 발생
  // const { decrease, increase } = useCountStore();

  // selector 함수로 특정 값만 불러오는 것이 best
  // const { increase, decrease } = useCountStore((store) => store.actions);

  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();

  return (
    <div>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
}
