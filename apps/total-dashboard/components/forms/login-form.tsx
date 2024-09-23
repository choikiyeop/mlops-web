export const LoginForm = () => {
  return (
    <form className="flex w-[440px] flex-col">
      <div>Welcome</div>
      <div className="mt-2.5 text-[1.231rem] font-bold text-[#93a0ae]">
        You need to sign in to use the platform
      </div>
      <input
        type="text"
        name="id"
        placeholder="아이디"
        className="mb-1.5 h-[50px] border border-[#c1c7d4] bg-[#f6faff] pl-5 text-[#555f70]"
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        className="h-[50px] border border-[#c1c7d4] bg-[#f6faff] pl-5 text-[#555f70]"
      />
      <button type="submit" className="bg-primary mt-2.5 h-16 rounded text-[1.385rem] text-white">
        SIGN IN
      </button>
      <div className="mt-[25px] border-t border-dotted border-[#555f70]" />
    </form>
  );
};
