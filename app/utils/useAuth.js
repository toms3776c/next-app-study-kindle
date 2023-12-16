import { jwtVerify } from "jose";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/user/login");
      }
      try {
        const secretKey = new TextEncoder().encode("next-market-app-book");
        const decodeJwt = await jwtVerify(token, secretKey);
        setLoginUserEmail(decodeJwt.payload.email);
      } catch (error) {
        router.push("/user/login");
      }
    };
    checkToken();
  }, [router]);

  return loginUserEmail;
};

export default useAuth;
