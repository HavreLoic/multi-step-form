import { PersonalInfoCard, AddOn, FinishingUp, PlanSelection } from "./UI";

export const plan = [
  {
    image: "assets/icon-arcade.svg",
    alt: "arcade",
    plan: "Arcade",
    price: "$90/yr",
    trailDuration: "2 months free",
  },
  {
    image: "assets/icon-advanced.svg",
    alt: "advanced",
    plan: "advanced",
    price: "$120/yr",
    trailDuration: "2 months free",
  },
  {
    image: "assets/icon-pro.svg",
    alt: "pro",
    plan: "pro",
    price: "$150/yr",
    trailDuration: "2 months free",
  },
];

export const addOn = [
  {
    plan: "Online service",
    description: "Access to multiplayer games",
    price: "+$1/mo",
  },
  {
    plan: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: "+$2/mo",
  },
  {
    plan: " Customizable Profile ",
    description: "Custom theme on your profile",
    price: "+$2/mo",
  },
];

export const sideBarItems = [
  {
    number: 1,
    step: "STEP 1",
    item: "YOUR INFO",
    link: "/your-info",
    page: PersonalInfoCard,
  },
  {
    number: 2,
    step: "STEP 2",
    item: "SELECT PLAN",
    link: "/select-plan",
    page: PlanSelection,
  },
  {
    number: 3,
    step: "STEP 3",
    item: "ADD-ONS",
    link: "/add-ons",
    page: AddOn,
  },
  {
    number: 4,
    step: "STEP 4",
    item: "SUMMARY",
    link: "/summary",
    page: FinishingUp,
  },
];
