import ClaimPortal from "../pages/ClaimPortal/index.svelte"

// Authentication related pages
import Login from "../pages/Authentication/Login.svelte";
import Register from "../pages/Authentication/Register.svelte";

// Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login.svelte";
import Login2 from "../pages/AuthenticationInner/Login2.svelte";
import Register1 from "../pages/AuthenticationInner/Register.svelte";
import Register2 from "../pages/AuthenticationInner/Register2.svelte";
import Recoverpw from "../pages/AuthenticationInner/Recoverpw.svelte";
import Recoverpw2 from "../pages/AuthenticationInner/Recoverpw2.svelte";
import ForgetPwd1 from "../pages/AuthenticationInner/ForgetPassword.svelte";
import ForgetPwd2 from "../pages/AuthenticationInner/ForgetPwd2.svelte";
import LockScreen from "../pages/AuthenticationInner/auth-lock-screen.svelte";
import LockScreen2 from "../pages/AuthenticationInner/auth-lock-screen-2.svelte";
import ConfirmMail from "../pages/AuthenticationInner/page-confirm-mail.svelte";
import ConfirmMail2 from "../pages/AuthenticationInner/page-confirm-mail-2.svelte";
import EmailVerification from "../pages/AuthenticationInner/auth-email-verification.svelte";
import EmailVerification2 from "../pages/AuthenticationInner/auth-email-verification-2.svelte";
import TwostepVerification from "../pages/AuthenticationInner/auth-two-step-verification.svelte";
import TwostepVerification2 from "../pages/AuthenticationInner/auth-two-step-verification-2.svelte";

// Dashboard
import Dashboard from "../pages/Dashboard/index.svelte";

//Pages
import PagesMaintenance from "../pages/Utility/pages-maintenance.svelte";
import PagesComingsoon from "../pages/Utility/pages-comingsoon.svelte";
import Pages404 from "../pages/Utility/pages-404.svelte";
import Pages500 from "../pages/Utility/pages-500.svelte";

const authProtectedRoutes = [
  { path: "/", component: Dashboard},
  { path: "/index", component: Dashboard },
  { path: "/dashboard", component: Dashboard },
];

const publicRoutes = [
  { path: "/", component: ClaimPortal },
  { path: "/index", component: ClaimPortal },
  { path: "/new-claim", component: ClaimPortal },
  
  { path: "/login", component: Login },
  { path: "/register", component: Register },

  { path: "/pages-maintenance", component: PagesMaintenance },
  { path: "/pages-comingsoon", component: PagesComingsoon },
  { path: "/pages-404", component: Pages404 },
  { path: "/pages-500", component: Pages500 },

  // Authentication Inner
  { path: "/auth-login", component: Login1 },
  { path: "/auth-login-2", component: Login2 },

  { path: "/auth-register", component: Register1 },
  { path: "/auth-register-2", component: Register2 },

  { path: "/auth-recoverpw", component: Recoverpw },
  { path: "/auth-recoverpw-2", component: Recoverpw2 },

  { path: "/auth-forgot-pwd", component: ForgetPwd1 },
  { path: "/auth-forgot-pwd-2", component: ForgetPwd2 },

  { path: "/auth-lock-screen", component: LockScreen },
  { path: "/auth-lock-screen-2", component: LockScreen2 },
  { path: "/auth-confirm-mail", component: ConfirmMail },
  { path: "/auth-confirm-mail-2", component: ConfirmMail2 },
  { path: "/auth-email-verification", component: EmailVerification },
  { path: "/auth-email-verification-2", component: EmailVerification2 },
  { path: "/auth-two-step-verification", component: TwostepVerification },
  { path: "/auth-two-step-verification-2", component: TwostepVerification2 },
];

const MOCK_DATA = {
  authProtectedRoutes,
  publicRoutes,
};

export default MOCK_DATA;