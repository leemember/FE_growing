import { useCallback, useState } from "react";

const OneWayDataBinding = () => {
  // 얘는 최초에 한 번만 실행되는 기본값이다.
  const [text, setText] = useState(() => {
    return "하이";
  });

  /**
   *
   *
   */

  const [formInfo, setFormInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const handleReset = () => {
    setText("");
  };

  // useCallback은 의존성 애들이 바뀌지 않는 이상 새롭게 함수를 만들지 않다.
  const handleText = useCallback((e) => {
    /**
     *  지금의 formInfo의 값을 모르더라도
     *  setFormInfo의 콜백의 인자값으로
     *  지금의 값을 전달해주면서 값을 업데이트 시켜준다.
     *
     * 결과적으로 useCallback으로 성능은 최적화시켜주면서
     *  매번 함수를 만들지 않는다.
     *
     */
    setFormInfo((prev) => {
      // (prev) : 변경되기의 이전의 값
      return {
        ...prev,
        [e.target.name]: [e.target.value],
      };
    });
  }, []);

  const handleSubmit = () => {
    alert(formInfo.email, formInfo.password);
  };

  return (
    <div>
      <form>
        <input type="text" onChange={handleChange} value={text} />
        <p> {text}</p>
        <div onClick={handleReset}>초기화</div>

        {/* 이메일 / 비밀번호 폼 */}
        <label>
          이메일
          <input type="email" onChange={handleText} value={formInfo.email} />
        </label>
        <label>
          비밀번호
          <input
            type="password"
            onChange={handleText}
            value={formInfo.password}
          />
        </label>

        <button type="button" onClick={handleSubmit}>
          제출하기
        </button>
        {/* 이메일 / 비밀번호 폼 */}
      </form>
    </div>
  );
};

export default OneWayDataBinding;
