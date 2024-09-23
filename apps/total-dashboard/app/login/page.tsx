import { LoginForm } from '../../components/forms/login-form';

export default function LoginPage() {
  return (
    <main className="flex h-screen">
      <div className="hidden h-full w-2/5 bg-gray-50 sm:block">이미지</div>
      <div className="mx-auto sm:ml-[60px] sm:mt-[165px]">
        <LoginForm />
        <footer className="relative -ml-[515px] mt-[300px] font-bold text-white opacity-80">
          Copyright (C) 2024 innogrid. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
