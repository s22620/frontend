import { SignIn } from "@clerk/clerk-react";

export const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-center">
          Zaloguj się do swojego konta
        </h2>
        <div className="flex items-center justify-center">
          <SignIn signUpUrl="/sign-up" />
        </div>
      </div>
    </div>
  );
};
