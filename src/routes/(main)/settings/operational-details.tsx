import React from "react";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiShakeHandsLine,
} from "@remixicon/react";
import { createFileRoute } from "@tanstack/react-router";

import { cn } from "@/utils/cn";

import { DashedDivider } from "@/components/dashed-divider";
import Header from "@/components/header";
import * as Accordion from "@/components/ui/accordion";
import * as Divider from "@/components/ui/divider";
import * as ScrollArea from "@/components/ui/scroll-area";

export const Route = createFileRoute("/(main)/settings/operational-details")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Header
        icon={
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-bg-white-0 shadow-regular-xs ring-1 ring-inset ring-stroke-soft-200">
            <RiShakeHandsLine className="size-6 text-text-sub-600" />
          </div>
        }
        title="Operational Details"
        description="Set up your organization's operational info."
      />

      <div className="px-4 lg:px-8">
        <Divider.Root />
      </div>

      <ScrollArea.Root
        type="scroll"
        className="h-[calc(100vh-88px)] overflow-hidden"
      >
        <ScrollArea.Viewport className="h-full w-full">
          <div className="flex-1 flex w-full flex-col gap-5 px-4 py-6 lg:px-8">
            <div className="grid items-center gap-6 md:grid-cols-[minmax(0,26fr)_minmax(0,37fr)]">
              <div>
                <div className="text-label-sm text-text-strong-950">
                  Partner Type
                </div>
                <div className="mt-1 text-paragraph-xs text-text-sub-600">
                  Choose from: Country Level, Regional Partner, or Global
                  Partner.
                </div>
              </div>
              <span className="text-paragraph-sm text-text-strong-950">
                Country Level
              </span>
            </div>

            <DashedDivider />

            <div className="flex flex-col gap-2.5 pt-5 w-full mx-auto">
              <div className="flex items-center gap-1">
                <h2 className="text-label-sm text-text-strong-950">
                  Regional Countries
                </h2>
                {/* <span className='text-label-sm text-text-soft-400'>({count})</span> */}
              </div>
              <Accordion.Root
                type="single"
                defaultValue="africa"
                collapsible
                className=""
              >
                {regions.map((region, regionIndex) => (
                  <React.Fragment key={region.id}>
                    <Accordion.Item
                      key={region.id}
                      value={region.id}
                      className={cn(
                        "ring-transparent",
                        "hover:bg-transparent",
                        "has-focus-visible:bg-transparent",
                        "data-[state=open]:bg-transparent",
                      )}
                    >
                      <Accordion.Trigger>
                        {/* <div className="relative z-10 flex items-center">
                          <CompactButton.Root
                            asChild
                            fullRadius
                            data-hover
                            className="size-[20px]"
                          >
                            <div>
                              <CompactButton.Icon
                                as={({ className }) => (
                                  <div className="group-data-[state=open]/accordion:hidden">
                                    <RiAddLine className={className} />
                                  </div>
                                )}
                              />
                              <CompactButton.Icon
                                as={({ className }) => (
                                  <div className="hidden group-data-[state=open]/accordion:block">
                                    <RiSubtractLine
                                      className={cn(
                                        className,
                                        "rounded-full bg-bg-surface-800 text-white",
                                      )}
                                    />
                                  </div>
                                )}
                              />
                            </div>
                          </CompactButton.Root>
                        </div> */}
                        {region.title}
                        <Accordion.Arrow
                          openIcon={RiArrowDownSLine}
                          closeIcon={RiArrowUpSLine}
                        />
                      </Accordion.Trigger>
                      <Accordion.Content className="data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown overflow-hidden">
                        <div className="grid grid-cols-2 md:grid-cols-3 pl-[30px] pt-4">
                          {region.countries.map((country, index) => (
                            <React.Fragment key={country.id}>
                              <div
                                className={`flex items-start gap-2 ${
                                  index === region.countries.length - 1
                                    ? "pt-3"
                                    : "py-3"
                                }`}
                                tabIndex={-1}
                              >
                                {/* <StatusIcon status={item.status} /> */}
                                <img
                                  src={`/images/flags/${country.code}.svg`}
                                  className="size-4 shrink-0"
                                />
                                <div className="flex-1 text-label-xs text-text-sub-600">
                                  {country.label}
                                </div>
                              </div>
                              {/* {index < region.countries.length - 1 && <Divider />} */}
                            </React.Fragment>
                          ))}
                        </div>
                      </Accordion.Content>
                    </Accordion.Item>
                    {regionIndex < regions.length - 1 && <DashedDivider />}
                  </React.Fragment>
                ))}
              </Accordion.Root>

              {/* {regions.map((region) => (
                <label key={region.id} className="block">
                  <div className="cursor-pointer rounded-2xl bg-bg-white-0 p-4 shadow-regular-xs ring-0 ring-stroke-soft-200 transition duration-200 ease-out hover:bg-bg-weak-50 hover:shadow-none hover:ring-0">
                    <div className="flex items-start gap-3">
                      <Checkbox.Root id={region.id} defaultChecked disabled />
                      <div className="flex flex-1 flex-col gap-1">
                        <div className="text-label-sm text-text-strong-950">
                          {region.title}
                        </div>
                        <div className="text-paragraph-xs text-text-sub-600">
                          {region.description}
                        </div>
                      </div>
                    </div>

                    <div className="py-5 pl-8">
                      <Divider />
                    </div>

                    <div className="pl-8 grid grid-cols-3">
                      {region.countries.map((country, index) => (
                        <React.Fragment key={country.id}>
                          <div
                            className={`flex items-start gap-2 ${
                              index === region.countries.length - 1
                                ? "pt-3"
                                : "py-3"
                            }`}
                            tabIndex={-1}
                          >
                            <img
                              src={`/images/flags/${country.code}.svg`}
                              className="size-4 shrink-0"
                            />
                            <div className="flex-1 text-label-xs text-text-sub-600">
                              {country.label}
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </label>
              ))} */}
            </div>
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.ScrollbarVertical />
      </ScrollArea.Root>
    </>
  );
}

const regions = [
  {
    id: "africa",
    title: "Africa",
    countries: [
      { id: "algeria", code: "DZ", label: "Algeria" },
      { id: "angola", code: "AO", label: "Angola" },
      { id: "benin", code: "BJ", label: "Benin" },
      { id: "botswana", code: "BW", label: "Botswana" },
      { id: "burkina-faso", code: "BF", label: "Burkina Faso" },
      { id: "burundi", code: "BI", label: "Burundi" },
      { id: "cabo-verde", code: "CV", label: "Cabo Verde" },
      { id: "cameroon", code: "CM", label: "Cameroon" },
      {
        id: "central-african-republic",
        code: "CF",
        label: "Central African Republic",
      },
      { id: "chad", code: "TD", label: "Chad" },
      { id: "comoros", code: "KM", label: "Comoros" },
      { id: "congo-brazzaville", code: "CG", label: "Congo (Brazzaville)" },
      { id: "congo-kinshasa", code: "CD", label: "Congo (Kinshasa)" },
      { id: "cote-divoire", code: "CI", label: "Côte d'Ivoire" },
      { id: "djibouti", code: "DJ", label: "Djibouti" },
      { id: "egypt", code: "EG", label: "Egypt" },
      { id: "equatorial-guinea", code: "GQ", label: "Equatorial Guinea" },
      { id: "eritrea", code: "ER", label: "Eritrea" },
      { id: "eswatini", code: "SZ", label: "Eswatini" },
      { id: "ethiopia", code: "ET", label: "Ethiopia" },
      { id: "gabon", code: "GA", label: "Gabon" },
      { id: "gambia", code: "GM", label: "Gambia" },
      { id: "ghana", code: "GH", label: "Ghana" },
      { id: "guinea", code: "GN", label: "Guinea" },
      { id: "guinea-bissau", code: "GW", label: "Guinea-Bissau" },
      { id: "kenya", code: "KE", label: "Kenya" },
      { id: "lesotho", code: "LS", label: "Lesotho" },
      { id: "liberia", code: "LR", label: "Liberia" },
      { id: "libya", code: "LY", label: "Libya" },
      { id: "madagascar", code: "MG", label: "Madagascar" },
      { id: "malawi", code: "MW", label: "Malawi" },
      { id: "mali", code: "ML", label: "Mali" },
      { id: "mauritania", code: "MR", label: "Mauritania" },
      { id: "mauritius", code: "MU", label: "Mauritius" },
      { id: "morocco", code: "MA", label: "Morocco" },
      { id: "mozambique", code: "MZ", label: "Mozambique" },
      { id: "namibia", code: "NA", label: "Namibia" },
      { id: "niger", code: "NE", label: "Niger" },
      { id: "nigeria", code: "NG", label: "Nigeria" },
      { id: "rwanda", code: "RW", label: "Rwanda" },
      {
        id: "sao-tome-and-principe",
        code: "ST",
        label: "Sao Tome and Principe",
      },
      { id: "senegal", code: "SN", label: "Senegal" },
      { id: "seychelles", code: "SC", label: "Seychelles" },
      { id: "sierra-leone", code: "SL", label: "Sierra Leone" },
      { id: "somalia", code: "SO", label: "Somalia" },
      { id: "south-africa", code: "ZA", label: "South Africa" },
      { id: "south-sudan", code: "SS", label: "South Sudan" },
      { id: "sudan", code: "SD", label: "Sudan" },
      { id: "tanzania", code: "TZ", label: "Tanzania" },
      { id: "togo", code: "TG", label: "Togo" },
      { id: "tunisia", code: "TN", label: "Tunisia" },
      { id: "uganda", code: "UG", label: "Uganda" },
      { id: "zambia", code: "ZM", label: "Zambia" },
      { id: "zimbabwe", code: "ZW", label: "Zimbabwe" },
    ],
  },
  {
    id: "asia",
    title: "Asia",
    countries: [
      { id: "afghanistan", code: "AF", label: "Afghanistan" },
      { id: "armenia", code: "AM", label: "Armenia" },
      { id: "azerbaijan", code: "AZ", label: "Azerbaijan" },
      { id: "bahrain", code: "BH", label: "Bahrain" },
      { id: "bangladesh", code: "BD", label: "Bangladesh" },
      { id: "bhutan", code: "BT", label: "Bhutan" },
      { id: "brunei", code: "BN", label: "Brunei" },
      { id: "cambodia", code: "KH", label: "Cambodia" },
      { id: "china", code: "CN", label: "China" },
      { id: "cyprus", code: "CY", label: "Cyprus" },
      { id: "east-timor", code: "TL", label: "East Timor" },
      { id: "georgia", code: "GE", label: "Georgia" },
      { id: "india", code: "IN", label: "India" },
      { id: "indonesia", code: "ID", label: "Indonesia" },
      { id: "iran", code: "IR", label: "Iran" },
      { id: "iraq", code: "IQ", label: "Iraq" },
      { id: "israel", code: "IL", label: "Israel" },
      { id: "japan", code: "JP", label: "Japan" },
      { id: "jordan", code: "JO", label: "Jordan" },
      { id: "kazakhstan", code: "KZ", label: "Kazakhstan" },
      { id: "kuwait", code: "KW", label: "Kuwait" },
      { id: "kyrgyzstan", code: "KG", label: "Kyrgyzstan" },
      { id: "laos", code: "LA", label: "Laos" },
      { id: "lebanon", code: "LB", label: "Lebanon" },
      { id: "malaysia", code: "MY", label: "Malaysia" },
      { id: "maldives", code: "MV", label: "Maldives" },
      { id: "mongolia", code: "MN", label: "Mongolia" },
      { id: "myanmar", code: "MM", label: "Myanmar (Burma)" },
      { id: "nepal", code: "NP", label: "Nepal" },
      { id: "north-korea", code: "KP", label: "North Korea" },
      { id: "oman", code: "OM", label: "Oman" },
      { id: "pakistan", code: "PK", label: "Pakistan" },
      { id: "palestine", code: "PS", label: "Palestine" },
      { id: "philippines", code: "PH", label: "Philippines" },
      { id: "qatar", code: "QA", label: "Qatar" },
      { id: "saudi-arabia", code: "SA", label: "Saudi Arabia" },
      { id: "singapore", code: "SG", label: "Singapore" },
      { id: "south-korea", code: "KR", label: "South Korea" },
      { id: "sri-lanka", code: "LK", label: "Sri Lanka" },
      { id: "syria", code: "SY", label: "Syria" },
      { id: "taiwan", code: "TW", label: "Taiwan" },
      { id: "tajikistan", code: "TJ", label: "Tajikistan" },
      { id: "thailand", code: "TH", label: "Thailand" },
      { id: "turkey", code: "TR", label: "Turkey" },
      { id: "turkmenistan", code: "TM", label: "Turkmenistan" },
      { id: "united-arab-emirates", code: "AE", label: "United Arab Emirates" },
      { id: "uzbekistan", code: "UZ", label: "Uzbekistan" },
      { id: "vietnam", code: "VN", label: "Vietnam" },
      { id: "yemen", code: "YE", label: "Yemen" },
    ],
  },
  {
    id: "europe",
    title: "Europe",
    countries: [
      { id: "albania", code: "AL", label: "Albania" },
      { id: "andorra", code: "AD", label: "Andorra" },
      { id: "austria", code: "AT", label: "Austria" },
      { id: "belarus", code: "BY", label: "Belarus" },
      { id: "belgium", code: "BE", label: "Belgium" },
      {
        id: "bosnia-and-herzegovina",
        code: "BA",
        label: "Bosnia and Herzegovina",
      },
      { id: "bulgaria", code: "BG", label: "Bulgaria" },
      { id: "croatia", code: "HR", label: "Croatia" },
      { id: "czech-republic", code: "CZ", label: "Czech Republic" },
      { id: "denmark", code: "DK", label: "Denmark" },
      { id: "estonia", code: "EE", label: "Estonia" },
      { id: "finland", code: "FI", label: "Finland" },
      { id: "france", code: "FR", label: "France" },
      { id: "germany", code: "DE", label: "Germany" },
      { id: "greece", code: "GR", label: "Greece" },
      { id: "hungary", code: "HU", label: "Hungary" },
      { id: "iceland", code: "IS", label: "Iceland" },
      { id: "ireland", code: "IE", label: "Ireland" },
      { id: "italy", code: "IT", label: "Italy" },
      { id: "kosovo", code: "XK", label: "Kosovo" },
      { id: "latvia", code: "LV", label: "Latvia" },
      { id: "liechtenstein", code: "LI", label: "Liechtenstein" },
      { id: "lithuania", code: "LT", label: "Lithuania" },
      { id: "luxembourg", code: "LU", label: "Luxembourg" },
      { id: "malta", code: "MT", label: "Malta" },
      { id: "moldova", code: "MD", label: "Moldova" },
      { id: "monaco", code: "MC", label: "Monaco" },
      { id: "montenegro", code: "ME", label: "Montenegro" },
      { id: "netherlands", code: "NL", label: "Netherlands" },
      { id: "north-macedonia", code: "MK", label: "North Macedonia" },
      { id: "norway", code: "NO", label: "Norway" },
      { id: "poland", code: "PL", label: "Poland" },
      { id: "portugal", code: "PT", label: "Portugal" },
      { id: "romania", code: "RO", label: "Romania" },
      { id: "russia", code: "RU", label: "Russia" },
      { id: "san-marino", code: "SM", label: "San Marino" },
      { id: "serbia", code: "RS", label: "Serbia" },
      { id: "slovakia", code: "SK", label: "Slovakia" },
      { id: "slovenia", code: "SI", label: "Slovenia" },
      { id: "spain", code: "ES", label: "Spain" },
      { id: "sweden", code: "SE", label: "Sweden" },
      { id: "switzerland", code: "CH", label: "Switzerland" },
      { id: "ukraine", code: "UA", label: "Ukraine" },
      { id: "united-kingdom", code: "GB", label: "United Kingdom" },
      { id: "vatican-city", code: "VA", label: "Vatican City" },
    ],
  },
  {
    id: "north-america",
    title: "North America",
    countries: [
      { id: "antigua-and-barbuda", code: "AG", label: "Antigua and Barbuda" },
      { id: "bahamas", code: "BS", label: "Bahamas" },
      { id: "barbados", code: "BB", label: "Barbados" },
      { id: "belize", code: "BZ", label: "Belize" },
      { id: "canada", code: "CA", label: "Canada" },
      { id: "costa-rica", code: "CR", label: "Costa Rica" },
      { id: "cuba", code: "CU", label: "Cuba" },
      { id: "dominica", code: "DM", label: "Dominica" },
      { id: "dominican-republic", code: "DO", label: "Dominican Republic" },
      { id: "el-salvador", code: "SV", label: "El Salvador" },
      { id: "grenada", code: "GD", label: "Grenada" },
      { id: "guatemala", code: "GT", label: "Guatemala" },
      { id: "haiti", code: "HT", label: "Haiti" },
      { id: "honduras", code: "HN", label: "Honduras" },
      { id: "jamaica", code: "JM", label: "Jamaica" },
      { id: "mexico", code: "MX", label: "Mexico" },
      { id: "nicaragua", code: "NI", label: "Nicaragua" },
      { id: "panama", code: "PA", label: "Panama" },
      {
        id: "saint-kitts-and-nevis",
        code: "KN",
        label: "Saint Kitts and Nevis",
      },
      { id: "saint-lucia", code: "LC", label: "Saint Lucia" },
      {
        id: "saint-vincent-and-the-grenadines",
        code: "VC",
        label: "Saint Vincent and the Grenadines",
      },
      { id: "trinidad-and-tobago", code: "TT", label: "Trinidad and Tobago" },
      { id: "united-states", code: "US", label: "United States" },
    ],
  },
  {
    id: "oceania",
    title: "Oceania",
    description:
      "Oceania is a geographic region comprising thousands of islands throughout the Central and South Pacific Ocean. It includes Australia, the smallest continent, and the island nations of Melanesia, Micronesia, and Polynesia, known for their stunning natural beauty and unique indigenous cultures.",
    countries: [
      { id: "australia", code: "AU", label: "Australia" },
      { id: "fiji", code: "FJ", label: "Fiji" },
      { id: "kiribati", code: "KI", label: "Kiribati" },
      { id: "marshall-islands", code: "MH", label: "Marshall Islands" },
      { id: "micronesia", code: "FM", label: "Micronesia" },
      { id: "nauru", code: "NR", label: "Nauru" },
      { id: "new-zealand", code: "NZ", label: "New Zealand" },
      { id: "palau", code: "PW", label: "Palau" },
      { id: "papua-new-guinea", code: "PG", label: "Papua New Guinea" },
      { id: "samoa", code: "WS", label: "Samoa" },
      { id: "solomon-islands", code: "SB", label: "Solomon Islands" },
      { id: "tonga", code: "TO", label: "Tonga" },
      { id: "tuvalu", code: "TV", label: "Tuvalu" },
      { id: "vanuatu", code: "VU", label: "Vanuatu" },
    ],
  },
  {
    id: "south-america",
    title: "South America",
    description:
      "South America, the fourth-largest continent, is home to the Andes Mountains, the Amazon Rainforest, and diverse cultural heritage. It's known for its vibrant cities, ancient ruins, and stunning natural wonders.",
    countries: [
      { id: "argentina", code: "AR", label: "Argentina" },
      { id: "bolivia", code: "BO", label: "Bolivia" },
      { id: "brazil", code: "BR", label: "Brazil" },
      { id: "chile", code: "CL", label: "Chile" },
      { id: "colombia", code: "CO", label: "Colombia" },
      { id: "ecuador", code: "EC", label: "Ecuador" },
      { id: "guyana", code: "GY", label: "Guyana" },
      { id: "paraguay", code: "PY", label: "Paraguay" },
      { id: "peru", code: "PE", label: "Peru" },
      { id: "suriname", code: "SR", label: "Suriname" },
      { id: "uruguay", code: "UY", label: "Uruguay" },
      { id: "venezuela", code: "VE", label: "Venezuela" },
    ],
  },
];
