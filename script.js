var elStartingPoint = document.querySelector("#StartingPoint");
var elAir_Launch = document.querySelector("#Air_Launch");
var elStarting_point_Altitude = document.querySelector(
  "#Starting_point_Altitude"
);
var elAdditional_Speed = document.querySelector("#Additional_Speed");
var elOrbit_Perigee = document.querySelector("#Orbit_Perigee");
var elOrbit_Apogee = document.querySelector("#Orbit_Apogee");
var elSpaceport_latitude = document.querySelector("#Spaceport_latitude");
var elOrbit_Inclination = document.querySelector("#Orbit_Inclination");

var elIntermediate_angle = document.querySelector("#Intermediate_angle");
var elLaunch_azimuth = document.querySelector("#Launch_azimuth");
var elLaunch_point_speed = document.querySelector("#Launch_point_speed");
var elStarting_point_Altitude_orbital_velocity = document.querySelector(
  "#Starting_point_Altitude_orbital_velocity"
);
var elAbsolute_orbital_velocity = document.querySelector(
  "#Absolute_orbital_velocity"
);
var elOrbital_period = document.querySelector("#Orbital_period");

var elApogee_velocity = document.querySelector("#Apogee_velocity");
var elPerigee_velocity = document.querySelector("#Perigee_velocity");
var elVsp_for_inclination_change = document.querySelector(
  "#Vsp_for_inclination_change"
);

var elOrbital_velocity = document.querySelector("#Orbital_velocity");
var elOrbital_velocity_increment_due_to_the_Earth_rotation = document.querySelector(
  "#Orbital_velocity_increment_due_to_the_Earth_rotation"
);
var elVsp_for_circular_orbit = document.querySelector(
  "#Vsp_for_circular_orbit"
);
var elInjection_velocity = document.querySelector("#Injection_velocity");
var elVsp_for_target_orbit = document.querySelector("#Vsp_for_target_orbit");
var elVsp_for_LEO = document.querySelector("#Vsp_for_LEO");

var elOrbit = document.querySelector("#Orbit");

//=== ROCKET ===
var elRocket = document.querySelector("#Rocket");
var elRocketDescription = document.querySelector("#RocketDescription");
var elOrbitDescription = document.querySelector("#OrbitDescription");
var elThrust_to_weight_ratio = document.querySelector(
  "#Thrust_to_weight_ratio"
);

var elRocket_Mass = document.querySelector("#Rocket_Mass");
var elLift_off_Mass = document.querySelector("#Lift_off_Mass");
var elMax_midsection_D = document.querySelector("#Max_midsection_D");
var elFairing_mass = document.querySelector("#Fairing_mass");
var elFairing_jettison_velocity = document.querySelector(
  "#Fairing_jettison_velocity"
);
var elFairing_jettison_delta_v = document.querySelector(
  "#Fairing_jettison_delta_v"
);
var elJettisoned_battery_mass = document.querySelector(
  "#Jettisoned_battery_mass"
);

var elAssumed_payload_mass = document.querySelector("#Assumed_payload_mass");
var elPayload_to_Lift_off_mass_ratio = document.querySelector(
  "#Payload_to_Lift_off_mass_ratio"
);
var el2nd_Stage_mass_ratio = document.querySelector("#_2nd_Stage_mass_ratio");
var el3rd_Stage_mass_ratio = document.querySelector("#_3rd_Stage_mass_ratio");
var el1st_Dry_to_Wet_mass_ratio_Range = document.querySelector(
  "#_1st_Dry_to_Wet_mass_ratio_Range"
);
var el1st_Dry_to_Wet_mass_ratio = document.querySelector(
  "#_1st_Dry_to_Wet_mass_ratio"
);
var el2nd_Dry_to_Wet_mass_ratio_Range = document.querySelector(
  "#_2nd_Dry_to_Wet_mass_ratio_Range"
);
var el2nd_Dry_to_Wet_mass_ratio = document.querySelector(
  "#_2nd_Dry_to_Wet_mass_ratio"
);
var el3rd_Dry_to_Wet_mass_ratio_Range = document.querySelector(
  "#_3rd_Dry_to_Wet_mass_ratio_Range"
);
var el3rd_Dry_to_Wet_mass_ratio = document.querySelector(
  "#_3rd_Dry_to_Wet_mass_ratio"
);
var elUnused_propellant_of_1st_Stage_Range = document.querySelector(
  "#Unused_propellant_of_1st_Stage_Range"
);
var elUnused_propellant_of_1st_Stage = document.querySelector(
  "#Unused_propellant_of_1st_Stage"
);
var elUnused_propellant_of_2nd_Stage_Range = document.querySelector(
  "#Unused_propellant_of_2nd_Stage_Range"
);
var elUnused_propellant_of_2nd_Stage = document.querySelector(
  "#Unused_propellant_of_2nd_Stage"
);
var elUnused_propellant_of_Transfer_Orbit_Stage_Range = document.querySelector(
  "#Unused_propellant_of_Transfer_Orbit_Stage_Range"
);
var elUnused_propellant_of_Transfer_Orbit_Stage = document.querySelector(
  "#Unused_propellant_of_Transfer_Orbit_Stage"
);

var elFirst_stage_engine_thrust = document.querySelector(
  "#First_stage_engine_thrust"
);
var elFirst_stage_engines_number = document.querySelector(
  "#First_stage_engines_number"
);
var elFirst_stage_isp_sea_level_Range = document.querySelector(
  "#First_stage_isp_sea_level_Range"
);
var elFirst_stage_isp_sea_level = document.querySelector(
  "#First_stage_isp_sea_level"
);
var elFirst_stage_isp_vac_Range = document.querySelector(
  "#First_stage_isp_vac_Range"
);
var elFirst_stage_isp_vac = document.querySelector("#First_stage_isp_vac");
var elSecond_stage_engine_thrust = document.querySelector(
  "#Second_stage_engine_thrust"
);
var elSecond_stage_engines_number = document.querySelector(
  "#Second_stage_engines_number"
);
var elSecond_stage_isp_vac_Range = document.querySelector(
  "#Second_stage_isp_vac_Range"
);
var elSecond_stage_isp_vac = document.querySelector("#Second_stage_isp_vac");
var elTransfer_Orbit_Stage_isp_Range = document.querySelector(
  "#Transfer_Orbit_Stage_isp_Range"
);
var elTransfer_Orbit_Stage_isp = document.querySelector(
  "#Transfer_Orbit_Stage_isp"
);
var elSpecific_Impulse_Variation_Range = document.querySelector(
  "#Specific_Impulse_Variation_Range"
);
var elSpecific_Impulse_Variation = document.querySelector(
  "#Specific_Impulse_Variation"
);

var elExtra_speed_for_flight_to_the_planets = document.querySelector(
  "#Extra_speed_for_flight_to_the_planets"
);

var elEngine1 = document.querySelector("#Engine1");
var elEngine2 = document.querySelector("#Engine2");

var elCycle = document.querySelector("#Cycle");
var elCycle2 = document.querySelector("#Cycle2");
var elCycle3 = document.querySelector("#Cycle3");
var elFuel = document.querySelector("#Fuel");
var elFuel2 = document.querySelector("#Fuel2");
var elFuel3 = document.querySelector("#Fuel3");
var elStages = document.querySelector("#Stages");

//=== Losses ===
var elGravity_losses_at_specific_altitude = document.querySelector(
  "#Gravity_losses_at_specific_altitude"
);
var elGravity_losses = document.querySelector("#Gravity_losses");
var elAerodynamic_losses = document.querySelector("#Aerodynamic_losses");
var elSummary_losses = document.querySelector("#Summary_losses");
var elAssumed_losses = document.querySelector("#Assumed_losses");
var elVsp_with_losses = document.querySelector("#Vsp_with_losses");

//=== Output ===

var elFirst_stage_average_trajectory_isp = document.querySelector(
  "#First_stage_average_trajectory_isp"
);
var elFirst_stage_delta_v = document.querySelector("#First_stage_delta_v");
var elFirst_stage_final_mass = document.querySelector(
  "#First_stage_final_mass"
);
var elFirst_stage_propellant_mass = document.querySelector(
  "#First_stage_propellant_mass"
);
var elFirst_stage_dry_mass = document.querySelector("#First_stage_dry_mass");
var elFirst_stage_run_time = document.querySelector("#First_stage_run_time");

var elSecond_stage_delta_v = document.querySelector("#Second_stage_delta_v");
var elSecond_stage_total_Start_mass = document.querySelector(
  "#Second_stage_total_Start_mass"
);
var elSecond_stage_total_mass_before_fairing_jettison = document.querySelector(
  "#Second_stage_total_mass_before_fairing_jettison"
);
var elSecond_stage_total_mass_before_battery_jettison = document.querySelector(
  "#Second_stage_total_mass_before_battery_jettison"
);
var elSecond_stage_delta_v_before_battery_jettison = document.querySelector(
  "#Second_stage_delta_v_before_battery_jettison"
);

var elSecond_stage_final_mass = document.querySelector(
  "#Second_stage_final_mass"
);
var elSecond_stage_propellant_mass = document.querySelector(
  "#Second_stage_propellant_mass"
);
var elSecond_stage_dry_mass = document.querySelector("#Second_stage_dry_mass");
var elSecond_stage_run_time = document.querySelector("#Second_stage_run_time");

var elTransfer_Orbit_stage_delta_v_required = document.querySelector(
  "#Transfer_Orbit_stage_delta_v_required"
);
var elTransfer_Orbit_stage_total_Start_mass = document.querySelector(
  "#Transfer_Orbit_stage_total_Start_mass"
);
var elTransfer_Orbit_stage_final_mass = document.querySelector(
  "#Transfer_Orbit_stage_final_mass"
);
var elTransfer_Orbit_stage_propellant_mass = document.querySelector(
  "#Transfer_Orbit_stage_propellant_mass"
);
var elTransfer_Orbit_stage_dry_mass = document.querySelector(
  "#Transfer_Orbit_stage_dry_mass"
);
var elCalculation_Error = document.querySelector("#Calculation_Error");

var elPayload_mass_calculated = document.querySelector(
  "#Payload_mass_calculated"
);
var elAggressivity = document.querySelector("#Aggressivity");
var elPayload_change = document.querySelector("#Payload_change");
var elExpand = document.querySelector("#Expand");
var elsExpanding = document.querySelectorAll('.content tr[class="Expanding"]');
var elsExpandingB = document.querySelectorAll(
  '.content tr[class="ExpandingB"]'
);
var elsExpanding3 = document.querySelectorAll(
  '.content tr[class="Expanding3"]'
);
var els3stages = document.querySelectorAll('.content tr[class="f3stages"]');
var elsElectric = document.querySelectorAll('.content tr[class="Electric"]');
var elsGEO = document.querySelectorAll('.content tr[class="fGEO"]');
var elsGEOI = document.querySelectorAll('.content tr[class="fGEOI"]');
var elLimitation = document.querySelector("#Limitation");
var elSet_averages = document.querySelector("#Set_averages");
var elSet_AllMin = document.querySelector("#Set_AllMin");
var elSet_AllMax = document.querySelector("#Set_AllMax");
var elProjecting = document.querySelectorAll('.content tr[class="Projecting"]');
var elProjectingH = document.querySelectorAll(
  '.content tr[class="ProjectingH"]'
);

var elReference = document.querySelector("#Reference");
var elRequired = document.querySelector("#Required");
var Thrust_To_Weight_2st = 1.0;
var Absolute_Mass = 0;
var Irremovable_Gravity_Losses;
var Vsp_for_target_orbit;
var Payload_mass;
var Aggressivity = 0;

window.onload = onPageLoad;
window.onunload = onPageUnload;

var s_start_point_count = 17;
var s_start_point_data = [
  ["Cape Canaveral", 28.5, -80.33, 0.1, 28.5, "USA East Coast"],
  [
    "Vandenberg",
    34.72,
    -120.62,
    0.11,
    34.72,
    "USA West Coast (basically polar orbit)",
  ],
  ["Wallops", 34.94, -75.47, 0, 34.94, "Wallops Island USA"],
  ["Kodiak", 57.43, -152.33, 0, 57.43, "Kodiak Island Alaska"],
  ["Mojave", 35.0, -118, 0, 35, "California USA"],
  [
    "Rocket Lab LC-1",
    -39.26,
    177.86,
    0.1,
    39.25,
    "New Zealand's Mahia Peninsula",
  ],
  ["Omelek Island", 9.3, 167.73, 0, 9.3, "Republic of the Marshall Islands"],
  [
    "Puerto Rico",
    18.26,
    65.61,
    0,
    18.26,
    "USA (access to all orbital inclinations)",
  ],
  ["BO Corn Ranch", 31.42, -104.76, 1.23, 31.42, "Blue Origin spaceport USA"],
  [
    "SpaceX Boca Chica",
    26,
    -97.15,
    0.1,
    26.0,
    "SpaceX South Texas Launch Site",
  ],
  ["Baikonur", 45.96, 63.3, 0.1, 51.6, "Kazakhstan (former USSR)"],
  [
    "Sea Launch (Equator)",
    0,
    -154.0,
    0.02,
    0.0,
    "Best way to reach geosynchronous orbit",
  ],
  ["Kuru (ESA)", 5.23, -52.77, 0.1, 5.23, "French Guiana"],
  ["Jiuquan (China)", 41.95, 100.28, 1, 40.95, "China"],
  ["Shriharikota (India)", 13.79, 80.25, 0.1, 44, "India"],
  ["Alcantara (Brazil)", -2.28, -44.38, 0.05, 2.28, "Brazil"],
  ["Tanegashima (Japan)", 30.4, 131.7, 0.1, 30.4, "Japan"],
];

var s_orbit_count = 8;
var s_orbit_data = [
  ["LEO", 200, 0, -1, 0, "Low Earth orbit"],
  ["ISS", 409, 418, 51.6, 0, "International Space Station orbit"],
  ["SSO", 500, 0, 98, 0, "Sun-synchronous orbit"],
  ["GTO", 200, 35786, -1, 0, "Geosynchronous transfer orbit"],
  ["GEO", 35786, 0, -1, 0, "Geosynchronous equatorial orbit"],
  ["Moon", 200, 0, -1, 3100, "Trans-Lunar injection orbit"],
  ["Mars", 200, 0, -1, 3613, "Trans-Mars injection orbit"],
  ["Venus", 200, 0, -1, 3506, "Trans-Venus injection orbit"],
];

var s_stages_count = 2;
var s_stages_name = ["2", "3"];

var s_fuel_count = 5;
var s_fuel_name = [
  "Lox/Kerosene",
  "Lox/Methane",
  "Lox/LH2",
  "Monopropellant",
  "Solid",
];
var s_cycle_count = 4;
var s_cycle_name = [
  ["Staged Combustion", "Most effective but more difficult to design cycle"],
  ["Gas-Generator", "Most common average efficiency cycle"],
  [
    "Electric",
    "Provides close to open cycle efficiency in case of jettison of used batteries",
  ],
  ["Pressure Fed", "The simplest cycle with low efficiency"],
];
var s_fuel_invert = [1, 1, 1, 1, 1, 1, 0, 0, 0, 0];
var s_slider = [
  el1st_Dry_to_Wet_mass_ratio_Range,
  el2nd_Dry_to_Wet_mass_ratio_Range,
  el3rd_Dry_to_Wet_mass_ratio_Range,
  elUnused_propellant_of_1st_Stage_Range,
  elUnused_propellant_of_2nd_Stage_Range,
  elUnused_propellant_of_Transfer_Orbit_Stage_Range,
  elFirst_stage_isp_sea_level_Range,
  elFirst_stage_isp_vac_Range,
  elSecond_stage_isp_vac_Range,
  elTransfer_Orbit_Stage_isp_Range,
  elSpecific_Impulse_Variation_Range,
];
var s_slider_edit = [
  el1st_Dry_to_Wet_mass_ratio,
  el2nd_Dry_to_Wet_mass_ratio,
  el3rd_Dry_to_Wet_mass_ratio,
  elUnused_propellant_of_1st_Stage,
  elUnused_propellant_of_2nd_Stage,
  elUnused_propellant_of_Transfer_Orbit_Stage,
  elFirst_stage_isp_sea_level,
  elFirst_stage_isp_vac,
  elSecond_stage_isp_vac,
  elTransfer_Orbit_Stage_isp,
  elSpecific_Impulse_Variation,
];

var s_cycle_data = [
  [1, 1, 1, 1], //Staged
  [0.89, 0.92, 0.95, 0.95], //Gas-Gen
  [0.85, 0.9, 0.92, 0.92], //Electric
  [0.79, 0.86, 0.85, 0.85],
]; //Pressure Fed

var s_fuel_data_max = [
  [8, 9, 20, 3, 3, 3, 320, 350, 375, 375], //Lox/Ker
  [9, 10, 20, 3, 3, 3, 335, 370, 390, 390], //Lox/Meth
  [14, 14, 20, 3, 3, 3, 410, 450, 490, 490], //Lox/LH2
  [13, 13, 20, 1, 1, 1, 270, 300, 300, 300], //Mono
  [13, 13, 20, 0, 0, 0, 290, 320, 320, 320],
]; //Solid

var s_fuel_data_min = [
  [5, 4, 10, 1, 0.5, 0.5, 283, 310, 332, 332], //Lox/Ker
  [6.2, 5.2, 10, 1, 0.5, 0.5, 297, 327, 345, 345], //Lox/Meth
  [10, 8.0, 10, 1, 0.5, 0.5, 363, 399, 434, 434], //Lox/LH2
  [8, 7, 10, 0, 0, 0, 239, 266, 266, 266], //Mono
  [8, 7, 10, 0, 0, 0, 257, 283, 283, 283],
]; //Solid

var ScoreCalcWeight = [
  [1, 1, 0, 1, 1, 0, 1, 0.25, 1, 0], // 2 stages
  [1, 1, 0.5, 1, 1, 0.5, 1, 0.25, 1, 0.5],
]; // 3 stages

var s_rocket_count = 27;
var s_rocket_data = [
  [
    "Custom Rocket...",
    1.2,
    32475,
    1.7,
    150,
    3500,
    0,
    775,
    24.86,
    0,
    8,
    10,
    20,
    2,
    2,
    1,
    290.5,
    327,
    365,
    320,
    0,
    0,
    0,
    0,
    0,
    3,
    "Cape Canaveral",
    "LEO",
    0,
    "Designed Rocket - engine based",
  ],
  [
    "NASA Saturn V",
    1.165,
    2909200,
    10.1,
    8000,
    3500,
    0,
    48600,
    21.284,
    4.228,
    5.677,
    8.081,
    10.976,
    2.6,
    2.0,
    2,
    263.0,
    304,
    421,
    421,
    0,
    1,
    2,
    1,
    2,
    1,
    "Cape Canaveral",
    "Moon",
    0,
    "Apollo lunar program launcher",
  ],
  [
    "Launcher Rocket-1",
    1.19,
    32600,
    1.7,
    150,
    3500,
    0,
    750,
    25.0,
    0.0,
    8.5,
    9.87,
    20,
    2,
    2,
    1,
    290.5,
    327,
    365,
    320,
    0,
    0,
    0,
    0,
    0,
    3,
    "Wallops",
    "LEO",
    0,
    "Four E-2 engines on the 1st stage (project)",
  ],
  [
    "Launcher XL",
    1.2,
    73540,
    2.1,
    400,
    3500,
    0,
    1500,
    13.65,
    2,
    8.0,
    10,
    20,
    2,
    2,
    1,
    290.5,
    327,
    365,
    320,
    0,
    0,
    0,
    0,
    0,
    3,
    "Wallops",
    "LEO",
    0,
    "Nine E-2 engines on the 1st stage (project)",
  ],
  [
    "Launcher Light",
    1.15,
    8500,
    1.1,
    30,
    3500,
    0,
    150,
    12.3,
    3,
    9.5,
    12,
    17,
    2,
    2,
    1,
    290.5,
    327,
    312,
    312,
    0,
    0,
    0,
    3,
    0,
    3,
    "Wallops",
    "LEO",
    0,
    "One E-2 engine on the 1st stage, pres fed 2nd stage",
  ],
  [
    "Launcher Nano",
    1.5,
    500,
    0.45,
    0,
    3500,
    0,
    1,
    24.0,
    4,
    23.0,
    23.0,
    15,
    3,
    3,
    3,
    225.0,
    270,
    315,
    300,
    0,
    3,
    0,
    3,
    0,
    3,
    "Wallops",
    "LEO",
    0,
    "The smallest orbital launcher (project)",
  ],
  [
    "Yuzhnoye Zenit-2",
    1.605,
    443730,
    4.15,
    1800,
    3500,
    0,
    13470,
    20.551,
    0,
    7.93,
    9.15,
    20,
    1.2,
    1.2,
    0.8,
    309.0,
    336,
    349,
    352,
    0,
    0,
    0,
    0,
    0,
    0,
    "Baikonur",
    "LEO",
    0,
    "Yuzhnoye Ukraine",
  ],
  [
    "Yuzhnoye Zenit-3SL",
    1.57,
    463220,
    4.15,
    1850,
    3500,
    0,
    3170,
    23.499,
    4.251,
    7.78,
    9.15,
    14.42,
    1.2,
    1.2,
    0.8,
    309.5,
    337.2,
    350,
    361,
    0,
    0,
    0,
    0,
    0,
    0,
    "Sea Launch (Equator)",
    "GEO",
    0,
    "Yuzhnoye Ukraine",
  ],
  [
    "ULA Delta-IV Medium",
    1.21,
    250570,
    5.1,
    2800,
    4500,
    0,
    11470,
    9.64,
    0,
    11.7,
    11.79,
    20,
    2,
    2,
    0.8,
    360.0,
    412,
    462,
    300,
    2,
    1,
    2,
    1,
    2,
    1,
    "Cape Canaveral",
    "LEO",
    0,
    "United Launch Alliance",
  ],
  [
    "ULA Atlas V 401",
    1.15,
    328770,
    4.2,
    2900,
    4500,
    0,
    9800,
    7.05,
    0,
    7.04,
    10.1,
    20,
    3,
    3,
    0.8,
    311.9,
    338.4,
    450,
    300,
    0,
    0,
    2,
    0,
    2,
    0,
    "Cape Canaveral",
    "ISS",
    0,
    "United Launch Alliance",
  ],
  [
    "Orbital (NG now) Antares 100",
    1.19,
    274735,
    3.9,
    970,
    4500,
    0,
    4600,
    5.1,
    0,
    7.17,
    8.69,
    20,
    3,
    0,
    0.8,
    297,
    331,
    301,
    300,
    0,
    0,
    4,
    1,
    4,
    1,
    "Wallops",
    "LEO",
    0,
    "Orbital Sciences Corporation (Aj-26)",
  ],
  [
    "Northrop Grumman Antares 230",
    1.32,
    287000,
    3.9,
    970,
    4500,
    0,
    6500,
    9.103,
    0,
    7.845,
    7.985,
    20,
    3,
    0,
    0.8,
    311.9,
    339.2,
    304,
    300,
    0,
    0,
    4,
    1,
    4,
    1,
    "Wallops",
    "LEO",
    0,
    "Northrop Grumman (RD-181)",
  ],
  [
    "Northrop Grumman Pegasus",
    3.18,
    18280,
    1.27,
    100,
    3500,
    0,
    443,
    23.31,
    2.39,
    13.34,
    10.39,
    13.48,
    0,
    0,
    0,
    270.0,
    295,
    289,
    287,
    4,
    1,
    4,
    1,
    4,
    1,
    "Vandenberg",
    "LEO",
    1,
    "Northrop Grumman Air Launch",
  ],
  [
    "SpaceX Falcon 1e",
    1.19,
    46955,
    1.7,
    145,
    3500,
    0,
    650,
    10.41,
    0.0,
    6.13,
    11.07,
    20.0,
    3,
    3,
    1,
    263.0,
    304,
    317,
    300,
    0,
    1,
    0,
    3,
    0,
    3,
    "Omelek Island",
    "LEO",
    0,
    "First SpaceX Launcher",
  ],
  [
    "SpaceX Falcon 9 V1.0",
    1.22,
    308000,
    3.66,
    1000,
    3500,
    0,
    8500,
    16.56,
    0.0,
    6.74,
    5.96,
    20.0,
    2.0,
    2.0,
    1,
    266.0,
    304,
    336,
    300,
    0,
    1,
    0,
    1,
    0,
    1,
    "Cape Canaveral",
    "LEO",
    0,
    "SpaceX",
  ],
  [
    "SpaceX Falcon 9 V1.1",
    1.19,
    490600,
    5.2,
    1900,
    3500,
    0,
    13150,
    14.656,
    0.0,
    5.493,
    5.425,
    20.0,
    3.0,
    3.0,
    1,
    282.0,
    311,
    342,
    300,
    0,
    1,
    0,
    1,
    0,
    1,
    "Cape Canaveral",
    "LEO",
    0,
    "SpaceX",
  ],
  [
    "SpaceX Falcon 9 FT",
    1.41,
    524554,
    5.2,
    1700,
    3500,
    0,
    22800,
    20.93,
    0.0,
    5.14,
    4.04,
    20.0,
    1.0,
    1.0,
    1,
    286.0,
    321,
    348,
    300,
    0,
    1,
    0,
    1,
    0,
    1,
    "Cape Canaveral",
    "LEO",
    0,
    "Heavy SpaceX Launcher",
  ],
  [
    "SpaceX Starship",
    1.41,
    5150000,
    9.0,
    0,
    3500,
    0,
    150000,
    25.9,
    0.0,
    14.0,
    9.1,
    10,
    1.5,
    1.5,
    1,
    330.0,
    356,
    380,
    380,
    1,
    0,
    1,
    0,
    1,
    0,
    "SpaceX Boca Chica",
    "LEO",
    0,
    "SpaceX (project)",
  ],
  [
    "Rocket Lab Electron",
    1.32,
    12355,
    1.2,
    44,
    3500,
    50,
    150,
    20.16,
    1.83,
    9.31,
    10.42,
    18.0,
    2,
    2,
    1,
    256.0,
    303,
    333,
    250,
    0,
    2,
    0,
    2,
    3,
    3,
    "Rocket Lab LC-1",
    "SSO",
    0,
    "Rocket Lab",
  ],
  [
    "Blue Origin New Glenn 2st",
    1.22,
    1380000,
    7.0,
    4000,
    3500,
    0,
    45000,
    19.564,
    0.0,
    9.91,
    7.037,
    10.909,
    1,
    1,
    1,
    310.0,
    335,
    358,
    440,
    1,
    0,
    1,
    0,
    1,
    0,
    "Cape Canaveral",
    "LEO",
    0,
    "Blue Origin 2-Stages (Superceded) (project)",
  ],
  [
    "Blue Origin New Glenn 3st",
    1.2,
    1435000,
    7.0,
    4000,
    3500,
    0,
    20000,
    22.647,
    5.761,
    9.91,
    7.037,
    10.909,
    1,
    1,
    1,
    310.0,
    335,
    358,
    440,
    1,
    0,
    1,
    0,
    2,
    1,
    "Cape Canaveral",
    "Mars",
    0,
    "Blue Origin 3-Stages (Superceded) (project)",
  ],
  [
    "Virgin Orbit Launcher One",
    1.44,
    22900,
    1.6,
    100,
    3500,
    0,
    300,
    11.13,
    0.0,
    9.0,
    9.0,
    20.0,
    3,
    3,
    1,
    290.0,
    308,
    328,
    300,
    0,
    1,
    0,
    1,
    0,
    1,
    "Mojave",
    "SSO",
    1,
    "Virgin Orbit (project)",
  ],
  [
    "Relativity Terran 1 ",
    1.2,
    55500,
    2.7,
    400,
    3500,
    0,
    1250,
    17.5,
    0.0,
    9.0,
    9.0,
    20.0,
    2,
    2,
    1,
    267.0,
    310,
    360,
    300,
    1,
    1,
    1,
    1,
    1,
    1,
    "Cape Canaveral",
    "LEO",
    0,
    "Relativity (project)",
  ],
  [
    "Astra Rocket-3",
    1.4,
    10400,
    1.32,
    30,
    3500,
    0,
    100,
    11.0,
    0.0,
    10.0,
    9.0,
    20.0,
    2,
    2,
    1,
    234.0,
    284,
    315,
    300,
    0,
    2,
    0,
    3,
    3,
    3,
    "Kodiak",
    "LEO",
    0,
    "Astra (project)",
  ],
  [
    "Firefly Alpha",
    1.25,
    52670,
    2.21,
    330,
    3500,
    0,
    1000,
    23.11,
    0.0,
    7.0,
    6.0,
    20.0,
    3,
    2,
    1,
    265.0,
    295.6,
    322,
    300,
    0,
    1,
    0,
    1,
    0,
    1,
    "Vandenberg",
    "LEO",
    0,
    "Firefly (project)",
  ],
  [
    "ABL RS1 (In-house engines)",
    1.2,
    46027,
    1.83,
    400,
    3500,
    0,
    1200,
    15.21,
    0.0,
    5.0,
    4.0,
    20.0,
    2.5,
    2,
    1,
    265.0,
    295.6,
    322,
    300,
    0,
    1,
    0,
    1,
    0,
    1,
    "Cape Canaveral",
    "LEO",
    0,
    "ABL Space Systems (project)",
  ],
  [
    "ABL RS1 (Ursa engines)",
    1.2,
    25260,
    1.83,
    300,
    3500,
    0,
    900,
    11.75,
    0.0,
    4.0,
    4.0,
    20.0,
    1,
    0.5,
    1,
    262.0,
    308,
    345,
    300,
    0,
    0,
    0,
    0,
    0,
    0,
    "Cape Canaveral",
    "LEO",
    0,
    "with URSA Major Tech engines (project)",
  ],
];
var s_engine_count = 34;
var s_engine_data = [
  ["Launcher E-2", 10000, 290.5, 327, 0, 0, 4, "Launcher 1st stage"],
  ["Launcher E-2 vac", 12600, 0.0, 365, 0, 0, 1, "Launcher 2nd stage"],
  [
    "Ursa Ripley",
    15900,
    262.0,
    308,
    0,
    0,
    1,
    "URSA Major ORSC engine for 1st stage",
  ],
  [
    "Ursa Hadley",
    2900,
    0.0,
    345,
    0,
    0,
    1,
    "URSA Major ORSC engine for 2nd stage",
  ],
  ["RL Rutherford", 1800, 256.0, 303, 0, 2, 9, "RocketLab Electron 1st stage"],
  [
    "RL Rutherford vac",
    2500,
    0.0,
    333,
    0,
    2,
    1,
    "Rocketlab Electron 2nd stage",
  ],
  [
    "Virgin Newton III",
    33600,
    290.0,
    308,
    0,
    1,
    1,
    "Virgin Orbit Launcherone 1st stage",
  ],
  [
    "Virgin Newton IV",
    2200,
    0.0,
    328,
    0,
    1,
    1,
    "Virgin Orbit Launcherone 2nd stage",
  ],
  ["Firefly Reaver", 16900, 265.0, 295.6, 0, 1, 4, "Firefly Alpha 1st stage"],
  ["Firefly Lightning", 7100, 0.0, 322, 0, 1, 1, "Firefly Alpha 2nd stage"],
  [
    "Relativity Aeon-1",
    7620,
    267.0,
    310,
    1,
    1,
    9,
    "Relativity Space Terran-1 1st stage",
  ],
  [
    "Relativity Aeon-1 vac",
    10200,
    0.0,
    360,
    1,
    1,
    1,
    "Relativity Space Terran-1 2nd stage",
  ],
  [
    "Isar Aqula SL",
    7650,
    256.0,
    303,
    0,
    1,
    9,
    "Isar Aerospace Spectrum 1st stage",
  ],
  [
    "Isar Aqula VAC",
    9580,
    0.0,
    333,
    0,
    1,
    1,
    "Isar Aerospace Spectrum 2nd stage",
  ],
  [
    "SpaceX Merlin 1C",
    56700,
    263.0,
    304,
    0,
    1,
    1,
    "SpaceX Falcone-1 1st stage",
  ],
  ["SpaceX Kerstel 2", 3100, 0.0, 317, 0, 3, 1, "SpaceX Falcone-1 2nd stage"],
  [
    "SpaceX Merlin 1D+",
    86200,
    282.0,
    311,
    0,
    1,
    9,
    "SpaceX Falcone-9FT 1st stage",
  ],
  [
    "SpaceX Merlin 1D+v",
    95300,
    0.0,
    348,
    0,
    1,
    1,
    "SpaceX Falcone-9FT 2nd stage",
  ],
  [
    "Energomash RD-170",
    740000,
    309.5,
    337.2,
    0,
    0,
    1,
    "Yuzhnoye Zenit 1st stage",
  ],
  ["Energomash RD-120", 93000, 0.0, 349, 0, 0, 1, "Yuzhnoye Zenit 2nd stage"],
  [
    "Energomash RD-180",
    390000,
    311.9,
    338.4,
    0,
    0,
    1,
    "United Launch Alliance Atlas V 1st stage",
  ],
  [
    "AR RL-10C",
    10400,
    0.0,
    450,
    2,
    0,
    1,
    "United Launch Alliance Atlas V 2nd stage",
  ],
  [
    "Energomash RD-181",
    196000,
    311.9,
    339.2,
    0,
    0,
    2,
    "Northrop Grumman Antares 230 1st stage",
  ],
  [
    "NG Castor 30XL",
    48300,
    0.0,
    304,
    4,
    3,
    1,
    "Northrop Grumman Antares 230 2nd stage",
  ],
  ["AR F-1", 690000, 263.0, 304, 0, 1, 5, "Saturn V 1st stage"],
  ["AR J-2", 104000, 0.0, 421, 2, 1, 5, "Saturn V 2nd stage"],
  [
    "AR RS-68A",
    320000,
    360.0,
    412,
    2,
    1,
    1,
    "United Launch Alliance Delta IV 1st stage",
  ],
  [
    "AR RL-10B",
    11300,
    0.0,
    462,
    2,
    0,
    1,
    "United Launch Alliance Delta IV 2nd stage",
  ],
  [
    "AR AJ-26",
    166000,
    297.0,
    331,
    0,
    0,
    2,
    "Orbital (NG now) Antares 100 1st stage",
  ],
  [
    "NG Castor 30A",
    30000,
    0.0,
    301,
    4,
    3,
    1,
    "Orbital (NG now) Antares 100 2nd stage",
  ],
  [
    "Blue Origin BE-4",
    250000,
    310.0,
    335,
    1,
    0,
    7,
    "Blue Origin New Glenn 1st stage",
  ],
  [
    "BLue Origin BE-4U",
    290000,
    0.0,
    358,
    1,
    0,
    1,
    "Blue Origin New Glenn 2nd stage",
  ],
  ["SpaceX Raptor", 200000, 330.0, 356, 1, 0, 37, "SpaceX Starship 1st stage"],
  ["SpaceX Raptor vac", 230000, 0.0, 380, 1, 0, 3, "SpaceX Starship 2nd stage"],
];
var s_desined_first = false;

function closeModel() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function openAbout() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  var popupContent1 =
    "<p>&emsp;This software is not designed to perform space launcher calculations because the method used is an approximation and is not accurate enough. The software also does not take into account the possibility of optimizing due to multiple burn maneuvers, which is especially effective for GTO and GEO orbits. It is only intended to assess the impact of the main rocket characteristics on the payload mass, and the resulting accuracy is about 10%. In addition it is assumed that the rocket design is conventional, meaning the body must be cylindrical with an aspect ratio of 20 to 30, the thrust-to-weight ratio of the first stage should be from 1.2 to 1.6, the mass ratio of the first to second stage should be from 1:0.05 to 1:0.25, and the fairing should jettison shortly after the second stage ignition upon reaching a predetermined velocity of 3500 m/s, which in general corresponds to a flight altitude of more than 95 km. To achieve high orbits, the upper stage engine must be capable of multiple restarts . When calculating possible orbits, it should also be taken into account that some space ports impose certain restrictions on the permissible inclinations of the orbits. This is usually due to an active trajectory leg passing over a populated area. For example, from the Canaveral spaceport, it is forbidden to to inject directly into SSO.</p>";
  var popupContent2 =
    '<p>&emsp;The software allows users to compare the relative characteristics of launchers, but in contrast to common approach percentages are used here, which is easier for an amateur. If it is more convenient to use the absolute values of the rocket stages&#039; masses, then these values can be entered in the "Output" section once the "Advanced" button is pressed. Afterwards these values will be converted into relative values. Values can only be entered in cells marked with a border. The velocity losses are calculated according to the Y. Lobanovsky method described in the article: "Delta velocity prediction for injection into Low Earth Orbit." This software provides two options - calculation based on an existing launcher, which allows you to evaluate its level of performance, or the engines-based calculation, which allows you to evaluate the characteristics of a hypothetical space launcher that can be created by applying a certain number of existing engines. For the second calculation option, select "Custom Rocket" in the "Select Rocket" menu. To compare the effectiveness of different fuels and cycles, it is convenient to use the averaged characteristics mode, "Set averages." The software has reasonable restrictions on the various characteristics of the rocket. If you want to go beyond these limits, you can remove this restriction by deselecting "Limit to reasonable." To display more information press "Advanced" button.</p>';
  var popupContent3 =
    "<p>&emsp;All of the rockets characteristics are obtained from the Internet. They are averaged and may differ from the specific case of launch. Since many of the specifications of the majority of projected launchers have not been published, they are assumed by the author based on his experience to ensure the declared payload. Some of these specifications may turn out to be practically impossible, since most companies use very aggressive predictions. </p>";
  var popupContent4 = "Igor Nikishchenko, Author and Chief Designer, Launcher";
  var modelContent =
    popupContent1 + popupContent2 + popupContent3 + popupContent4;
  var strModel = document.getElementById("popupContent");
  strModel.innerHTML = modelContent;
  var modelTitle = document.getElementById("modelTitle");
  modelTitle.innerHTML = "Background and usage";
}

function openLicense() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  var popupContent1 =
    "<p>MIT License</p><p>Copyright (c) 2020 Launcher Inc.</p>";
  var popupContent2 =
    "<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the &quot;Software&quot;), to deal in the Software without restriction, including without limitation the rights copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>";
  var popupContent3 =
    "<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>";
  var popupContent4 =
    "<p>THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, AUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>";
  var modelContent =
    popupContent1 + popupContent2 + popupContent3 + popupContent4;
  var strModel = document.getElementById("popupContent");
  strModel.innerHTML = modelContent;
  var modelTitle = document.getElementById("modelTitle");
  modelTitle.innerHTML = "MIT License";
}

function Rad2Deg(radians) {
  return radians * (180 / Math.PI);
}

function Deg2Rad(degrees) {
  return degrees * (Math.PI / 180);
}

function CalculateTargetVelocity() {
  var Starting_point_Altitude = parseFloat(elStarting_point_Altitude.value);
  var Additional_Speed = parseFloat(elAdditional_Speed.value);
  var Orbit_Perigee = parseFloat(elOrbit_Perigee.value);
  var Orbit_Apogee = parseFloat(elOrbit_Apogee.value);
  var Spaceport_latitude = parseFloat(elSpaceport_latitude.value);
  var Orbit_Inclination;
  if (elOrbit.selectedIndex == 2) {
    Orbit_Inclination =
      95.7 + 0.00296 * Orbit_Perigee + 7.97e-7 * Orbit_Perigee * Orbit_Perigee;
    elOrbit_Inclination.value = Orbit_Inclination.toFixed(2);
  } else Orbit_Inclination = parseFloat(elOrbit_Inclination.value);

  var Extra_speed_for_flight_to_the_planets = parseFloat(
    elExtra_speed_for_flight_to_the_planets.value
  );
  var Intermediate_angle =
    Math.abs(Orbit_Inclination) > Math.abs(Spaceport_latitude)
      ? Rad2Deg(
          Math.asin(
            Math.cos(Deg2Rad(Orbit_Inclination)) /
              Math.cos(Deg2Rad(Spaceport_latitude))
          )
        )
      : 90 -
        Rad2Deg(
          Math.asin(
            1 -
              Math.cos(Deg2Rad(Orbit_Inclination)) /
                Math.cos(Deg2Rad(Spaceport_latitude))
          )
        );
  elIntermediate_angle.textContent = Intermediate_angle.toFixed(2);

  var earth_radius = 6371;
  var gravity_const = 398600500000;

  var Launch_point_speed = 465 * Math.cos(Deg2Rad(Spaceport_latitude));
  elLaunch_point_speed.textContent = Launch_point_speed.toFixed(1);

  var Starting_point_Altitude_orbital_velocity = Math.sqrt(
    gravity_const / (earth_radius + Starting_point_Altitude)
  );
  elStarting_point_Altitude_orbital_velocity.textContent = Starting_point_Altitude_orbital_velocity.toFixed(
    1
  );

  var Absolute_orbital_velocity = Math.sqrt(
    gravity_const / (earth_radius + Orbit_Perigee)
  );
  elAbsolute_orbital_velocity.textContent = Absolute_orbital_velocity.toFixed(
    1
  );

  var Perigee_velocity =
    Orbit_Apogee == 0
      ? 1000 *
        Math.sqrt(
          398600.5 * (2 / (6371 + Orbit_Perigee) - 1 / (6371 + Orbit_Perigee))
        )
      : 1000 *
        Math.sqrt(
          398600.5 *
            (2 / (6371 + Orbit_Perigee) -
              1 / (6371 + 0.5 * (Orbit_Perigee + Orbit_Apogee)))
        );
  elPerigee_velocity.textContent = Perigee_velocity.toFixed(1);

  var Apogee_velocity =
    Orbit_Apogee == 0
      ? Perigee_velocity
      : 1000 *
        Math.sqrt(
          398600.5 *
            (2 / (6371 + Orbit_Apogee) -
              1 / (6371 + 0.5 * (Orbit_Perigee + Orbit_Apogee)))
        );
  elApogee_velocity.textContent = Apogee_velocity.toFixed(1);

  var Orbital_period =
    Orbit_Apogee == 0
      ? (((2 * Math.PI) / Math.sqrt(398600.5)) *
          Math.pow(6371 + Orbit_Perigee, 3 / 2)) /
        60
      : (((2 * Math.PI) / Math.sqrt(398600.5)) *
          Math.pow(6371 + 0.5 * (Orbit_Perigee + Orbit_Apogee), 3 / 2)) /
        60;
  elOrbital_period.textContent = Orbital_period.toFixed(2);

  var Vsp_for_inclination_change =
    elOrbit.selectedIndex == 4
      ? //			2*1597.*Math.sin(Math.abs(Deg2Rad(Orbit_Inclination)/2.)) :
        -3.215e-3 * Math.pow(Orbit_Inclination, 3) +
        0.5134 * Math.pow(Orbit_Inclination, 2) +
        0.571 * Orbit_Inclination
      : 0;
  elVsp_for_inclination_change.textContent = Vsp_for_inclination_change.toFixed(
    1
  );

  var tmp_velocity = Math.sqrt(
    Launch_point_speed * Launch_point_speed +
      Absolute_orbital_velocity * Absolute_orbital_velocity -
      2 *
        Launch_point_speed *
        Absolute_orbital_velocity *
        Math.sin(Deg2Rad(Intermediate_angle))
  );

  var Orbital_velocity =
    465 * Math.cos(Deg2Rad(Orbit_Inclination)) < Absolute_orbital_velocity
      ? tmp_velocity
      : -tmp_velocity;

  tmp_velocity = Math.sqrt(
    Launch_point_speed * Launch_point_speed +
      Absolute_orbital_velocity * Absolute_orbital_velocity -
      2 *
        Launch_point_speed *
        Absolute_orbital_velocity *
        Math.sin(Deg2Rad(Intermediate_angle) + 1e-7)
  );

  var Orbital_velocity_ =
    465 * Math.cos(Deg2Rad(Orbit_Inclination)) < Absolute_orbital_velocity
      ? tmp_velocity
      : -tmp_velocity;

  elOrbital_velocity.textContent = Orbital_velocity.toFixed(1);

  var Orbital_velocity_increment_due_to_the_Earth_rotation =
    Absolute_orbital_velocity - Orbital_velocity;
  elOrbital_velocity_increment_due_to_the_Earth_rotation.textContent = Orbital_velocity_increment_due_to_the_Earth_rotation.toFixed(
    1
  );

  var Launch_azimuth = Rad2Deg(
    Math.acos(
      (Absolute_orbital_velocity / Orbital_velocity) *
        Math.cos(Deg2Rad(Intermediate_angle))
    )
  );
  var Launch_azimuth_ = Rad2Deg(
    Math.acos(
      (Absolute_orbital_velocity / Orbital_velocity_) *
        Math.cos(Deg2Rad(Intermediate_angle) + 1e-7)
    )
  );
  if (Launch_azimuth > Launch_azimuth_) Launch_azimuth = -Launch_azimuth;
  elLaunch_azimuth.textContent = Launch_azimuth.toFixed(2);

  Absolute_orbital_velocity0 = Absolute_orbital_velocity;
  if (Absolute_orbital_velocity0 < 7788.5) Absolute_orbital_velocity0 = 7788.5;
  var Vsp_for_circular_orbit0 =
    Starting_point_Altitude_orbital_velocity +
    Starting_point_Altitude_orbital_velocity *
      (Starting_point_Altitude_orbital_velocity /
        Math.sqrt(
          0.5 *
            (Starting_point_Altitude_orbital_velocity *
              Starting_point_Altitude_orbital_velocity +
              Absolute_orbital_velocity0 * Absolute_orbital_velocity0)
        ) -
        1) +
    Absolute_orbital_velocity0 *
      (1 -
        Absolute_orbital_velocity0 /
          Math.sqrt(
            0.5 *
              (Starting_point_Altitude_orbital_velocity *
                Starting_point_Altitude_orbital_velocity +
                Absolute_orbital_velocity0 * Absolute_orbital_velocity0)
          ));
  Irremovable_Gravity_Losses =
    -242.5 + Vsp_for_circular_orbit0 - Absolute_orbital_velocity0;

  var Vsp_for_circular_orbit =
    Starting_point_Altitude_orbital_velocity +
    Starting_point_Altitude_orbital_velocity *
      (Starting_point_Altitude_orbital_velocity /
        Math.sqrt(
          0.5 *
            (Starting_point_Altitude_orbital_velocity *
              Starting_point_Altitude_orbital_velocity +
              Absolute_orbital_velocity * Absolute_orbital_velocity)
        ) -
        1) +
    Absolute_orbital_velocity *
      (1 -
        Absolute_orbital_velocity /
          Math.sqrt(
            0.5 *
              (Starting_point_Altitude_orbital_velocity *
                Starting_point_Altitude_orbital_velocity +
                Absolute_orbital_velocity * Absolute_orbital_velocity)
          )) -
    Orbital_velocity_increment_due_to_the_Earth_rotation -
    Additional_Speed +
    Vsp_for_inclination_change;
  elVsp_for_circular_orbit.textContent = Vsp_for_circular_orbit.toFixed(1);

  Vsp_for_target_orbit =
    Orbit_Apogee == 0
      ? Vsp_for_circular_orbit + Extra_speed_for_flight_to_the_planets
      : Vsp_for_circular_orbit +
        Extra_speed_for_flight_to_the_planets +
        Absolute_orbital_velocity *
          (Absolute_orbital_velocity /
            Math.sqrt(
              0.5 *
                (Absolute_orbital_velocity * Absolute_orbital_velocity +
                  gravity_const / (earth_radius + Orbit_Apogee))
            ) -
            1);
  elVsp_for_target_orbit.textContent = Vsp_for_target_orbit.toFixed(1);

  var Injection_velocity =
    Vsp_for_target_orbit + Orbital_velocity_increment_due_to_the_Earth_rotation;
  elInjection_velocity.textContent = Injection_velocity.toFixed(1);

  var Vsp_for_LEO =
    8031 -
    Orbital_velocity_increment_due_to_the_Earth_rotation -
    Additional_Speed;
  elVsp_for_LEO.textContent = Vsp_for_LEO.toFixed(1);
}

function CalculateTargetMass() {
  var Assumed_payload_mass = parseFloat(elAssumed_payload_mass.value);
  var Vsp_for_LEO = parseFloat(elVsp_for_LEO.textContent);
  var Fairing_jettison_velocity = parseFloat(elFairing_jettison_velocity.value);
  var Fairing_mass = parseFloat(elFairing_mass.value);
  var Rocket_Mass = parseFloat(elRocket_Mass.value);
  var Max_midsection_D = parseFloat(elMax_midsection_D.value);
  var Thrust_to_weight_ratio = parseFloat(elThrust_to_weight_ratio.value);
  var v2nd_Stage_mass_ratio = parseFloat(el2nd_Stage_mass_ratio.value);
  var v3rd_Stage_mass_ratio = parseFloat(el3rd_Stage_mass_ratio.value);
  var v1st_Dry_to_Wet_mass_ratio = parseFloat(
    el1st_Dry_to_Wet_mass_ratio.value
  );
  var v2nd_Dry_to_Wet_mass_ratio = parseFloat(
    el2nd_Dry_to_Wet_mass_ratio.value
  );
  var Unused_propellant_of_1st_Stage = parseFloat(
    elUnused_propellant_of_1st_Stage.value
  );
  var Unused_propellant_of_2nd_Stage = parseFloat(
    elUnused_propellant_of_2nd_Stage.value
  );
  var Specific_Impulse_Variation = parseFloat(
    elSpecific_Impulse_Variation.value
  );
  var First_stage_engine_thrust = parseFloat(elFirst_stage_engine_thrust.value);
  var First_stage_engines_number = parseFloat(
    elFirst_stage_engines_number.value
  );
  var First_stage_isp_vac =
    (parseFloat(elFirst_stage_isp_vac.value) * Specific_Impulse_Variation) /
    100;
  var First_stage_isp_sea_level =
    (parseFloat(elFirst_stage_isp_sea_level.value) *
      Specific_Impulse_Variation) /
    100;
  var Second_stage_engine_thrust = parseFloat(
    elSecond_stage_engine_thrust.value
  );
  var Second_stage_engines_number = parseFloat(
    elSecond_stage_engines_number.value
  );
  var Second_stage_isp_vac =
    (parseFloat(elSecond_stage_isp_vac.value) * Specific_Impulse_Variation) /
    100;
  var Transfer_Orbit_Stage_isp =
    (parseFloat(elTransfer_Orbit_Stage_isp.value) *
      Specific_Impulse_Variation) /
    100;
  var v3rd_Dry_to_Wet_mass_ratio = parseFloat(
    el3rd_Dry_to_Wet_mass_ratio.value
  );
  var Unused_propellant_of_Transfer_Orbit_Stage = parseFloat(
    elUnused_propellant_of_Transfer_Orbit_Stage.value
  );
  var Jettisoned_battery_mass = parseFloat(elJettisoned_battery_mass.value);

  //=== Output ===
  var First_stage_average_trajectory_isp =
    0.145 * First_stage_isp_sea_level + 0.855 * First_stage_isp_vac;

  if (Absolute_Mass == 0) {
    var First_stage_wet_mass = Rocket_Mass * (1 - v2nd_Stage_mass_ratio / 100);
    var First_stage_propellant_mass =
      First_stage_wet_mass * (1 - v1st_Dry_to_Wet_mass_ratio / 100);
    var First_stage_dry_mass =
      First_stage_wet_mass - First_stage_propellant_mass;
    var Second_stage_wet_mass =
      Rocket_Mass * (v2nd_Stage_mass_ratio / 100 - v3rd_Stage_mass_ratio / 100);
    var Second_stage_propellant_mass =
      Second_stage_wet_mass * (1 - v2nd_Dry_to_Wet_mass_ratio / 100);
    var Second_stage_dry_mass =
      Second_stage_wet_mass - Second_stage_propellant_mass;
    var Transfer_Orbit_stage_dry_mass =
      v3rd_Stage_mass_ratio == 0
        ? 0
        : (((Rocket_Mass * v3rd_Stage_mass_ratio) / 100) *
            v3rd_Dry_to_Wet_mass_ratio) /
          100;
    //			var Transfer_Orbit_stage_propellant_mass = Transfer_Orbit_stage_dry_mass*(100./v3rd_Dry_to_Wet_mass_ratio)-Transfer_Orbit_stage_dry_mass ;
    var Transfer_Orbit_stage_propellant_mass =
      (Rocket_Mass * v3rd_Stage_mass_ratio) / 100 -
      Transfer_Orbit_stage_dry_mass;
  } else {
    First_stage_propellant_mass = parseFloat(
      elFirst_stage_propellant_mass.value
    );
    First_stage_dry_mass = parseFloat(elFirst_stage_dry_mass.value);
    First_stage_wet_mass = First_stage_dry_mass + First_stage_propellant_mass;
    Second_stage_propellant_mass = parseFloat(
      elSecond_stage_propellant_mass.value
    );
    Second_stage_dry_mass = parseFloat(elSecond_stage_dry_mass.value);
    Second_stage_wet_mass =
      Second_stage_dry_mass + Second_stage_propellant_mass;
    Transfer_Orbit_stage_propellant_mass = parseFloat(
      elTransfer_Orbit_stage_propellant_mass.value
    );
    Transfer_Orbit_stage_dry_mass = parseFloat(
      elTransfer_Orbit_stage_dry_mass.value
    );
  }

  //=== Losses calculation ===
  var Const =
    First_stage_isp_vac -
    (First_stage_isp_vac - First_stage_isp_sea_level) * 0.169;
  var Const2 = Math.exp(
    112.13 /
      (Const +
        ((Const - First_stage_isp_sea_level) / ((1 - 0.169) * 1.8872)) *
          -0.8612)
  );
  var Gravity_losses_at_specific_altitude =
    9.81 *
    (500 /
      Math.sqrt(
        1.015 *
          Math.sqrt(
            (Thrust_to_weight_ratio - 1) *
              9.81 *
              (Const2 *
                (Const / First_stage_isp_sea_level) *
                ((Thrust_to_weight_ratio - 1) * 9.81) -
                (1 - Const2 * (Const / First_stage_isp_sea_level)) * 9.81)
          ) *
          9.81
      ));

  var Gravity_losses =
    (4 / 3) *
    (Thrust_to_weight_ratio < 1.46
      ? Gravity_losses_at_specific_altitude *
        (1.5 +
          2.5 * (Thrust_to_weight_ratio - 1.17) -
          4.25 *
            (Thrust_to_weight_ratio - 1.17) *
            (Thrust_to_weight_ratio - 1.17))
      : 1.865 * Gravity_losses_at_specific_altitude);
  var Gravity_lossesPr = Gravity_losses + Irremovable_Gravity_Losses;

  //=== Recursion ===
  for (itt = 1; itt <= 5; ++itt) {
    Lift_off_Mass = Rocket_Mass + Fairing_mass + Payload_mass;
    var Aerodynamic_losses =
      (Math.exp(-Starting_point_Altitude / 7.16) / (Lift_off_Mass / 2945000)) *
      Math.pow(Max_midsection_D / 10.1, 2) *
      (Thrust_to_weight_ratio > 1.17
        ? (0.045 + 0.1 * Math.pow(Thrust_to_weight_ratio - 1.17, 1.5)) * 1000
        : (0.045 +
            0.1 *
              (1.3332 * Thrust_to_weight_ratio * Thrust_to_weight_ratio -
                2.9399 * Thrust_to_weight_ratio +
                1.6148)) *
          1000);

    var Summary_losses = Gravity_losses + Aerodynamic_losses + 145;
    var Vsp_with_losses = Vsp_for_target_orbit + Summary_losses - 242.5;

    var First_stage_final_mass =
      Lift_off_Mass -
      (First_stage_propellant_mass / 100) *
        (100 - Unused_propellant_of_1st_Stage);
    var First_stage_delta_v =
      9.80665 *
      First_stage_average_trajectory_isp *
      Math.log(Lift_off_Mass / First_stage_final_mass);

    var Fairing_jettison_delta_v =
      Fairing_jettison_velocity * 1.2 > First_stage_delta_v
        ? Fairing_jettison_velocity * 1.2
        : First_stage_delta_v + 100;
    var Second_stage_delta_v_before_fairing_jettison =
      Fairing_jettison_delta_v - First_stage_delta_v;
    var Second_stage_total_Start_mass = Lift_off_Mass - First_stage_wet_mass;
    var Second_stage_total_mass_before_fairing_jettison =
      1 /
      (Math.exp(
        (Fairing_jettison_delta_v - First_stage_delta_v) /
          (Second_stage_isp_vac * 9.80665)
      ) /
        Second_stage_total_Start_mass);
    var Second_stage_total_mass_before_battery_jettison =
      Lift_off_Mass -
      First_stage_wet_mass -
      Fairing_mass -
      0.67 * Second_stage_propellant_mass;
    var Second_stage_delta_v_before_battery_jettison =
      9.80665 *
      Second_stage_isp_vac *
      Math.log(
        (Second_stage_total_mass_before_fairing_jettison - Fairing_mass) /
          Second_stage_total_mass_before_battery_jettison
      );

    var Transfer_Orbit_stage_total_Start_mass =
      Lift_off_Mass -
      First_stage_wet_mass -
      Second_stage_wet_mass -
      Fairing_mass;

    if (v3rd_Stage_mass_ratio == 0) {
      var Second_stage_delta_v = Vsp_with_losses - First_stage_delta_v;
      var Second_stage_final_mass =
        1 /
        (Math.exp(
          (Second_stage_delta_v -
            Second_stage_delta_v_before_fairing_jettison -
            Second_stage_delta_v_before_battery_jettison) /
            (Second_stage_isp_vac * 9.80665)
        ) /
          (Second_stage_total_mass_before_battery_jettison -
            Jettisoned_battery_mass));
      Payload_mass_calculated =
        Second_stage_final_mass +
        Jettisoned_battery_mass -
        Second_stage_dry_mass -
        (Second_stage_propellant_mass / 100) * Unused_propellant_of_2nd_Stage;
      var Transfer_Orbit_stage_final_mass = Transfer_Orbit_stage_total_Start_mass;
    } else {
      Second_stage_final_mass =
        Transfer_Orbit_stage_total_Start_mass +
        Second_stage_dry_mass -
        Jettisoned_battery_mass +
        Second_stage_propellant_mass * (Unused_propellant_of_2nd_Stage / 100);
      Second_stage_delta_v =
        Second_stage_delta_v_before_fairing_jettison +
        Second_stage_delta_v_before_battery_jettison +
        9.80665 *
          Second_stage_isp_vac *
          Math.log(
            (Second_stage_total_mass_before_battery_jettison -
              Jettisoned_battery_mass) /
              Second_stage_final_mass
          );
      Transfer_Orbit_stage_delta_v_required =
        v3rd_Stage_mass_ratio == 0
          ? 0
          : Vsp_with_losses - First_stage_delta_v - Second_stage_delta_v;
      Transfer_Orbit_stage_total_Start_mass =
        Second_stage_final_mass +
        Jettisoned_battery_mass -
        Second_stage_dry_mass -
        (Second_stage_propellant_mass / 100) * Unused_propellant_of_2nd_Stage;
      Transfer_Orbit_stage_final_mass =
        1 /
        (Math.exp(
          Transfer_Orbit_stage_delta_v_required /
            (Transfer_Orbit_Stage_isp * 9.80665)
        ) /
          Transfer_Orbit_stage_total_Start_mass);
      Payload_mass_calculated =
        Transfer_Orbit_stage_final_mass -
        Transfer_Orbit_stage_dry_mass -
        (Transfer_Orbit_stage_propellant_mass / 100) *
          Unused_propellant_of_Transfer_Orbit_Stage;
    }

    //=== Result ===
    var Assumed_payload_mass_base = parseFloat(elAssumed_payload_mass.value);

    elPayload_mass_calculated.textContent = Payload_mass_calculated.toFixed(1);
    var Payload_change = Payload_mass_calculated / Assumed_payload_mass_base;
    if (Payload_mass_calculated > 100) {
      var strComma = Math.round(Payload_mass_calculated);
      if (!!strComma)
        strComma = strComma.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      elPayload_mass_calculated.textContent = strComma;
    }
    elPayload_change.textContent = (Payload_change * 100).toFixed(1);
    Assumed_payload_mass = Payload_mass_calculated;
    //			if(elRocket.selectedIndex == 0)elAssumed_payload_mass.value = Assumed_payload_mass;
    Payload_mass = Payload_mass_calculated;
  }

  elLift_off_Mass.textContent = Lift_off_Mass.toFixed(0);
  var Payload_to_Lift_off_mass_ratio = Payload_mass / Lift_off_Mass;
  elPayload_to_Lift_off_mass_ratio.textContent = (
    Payload_to_Lift_off_mass_ratio * 100
  ).toFixed(2);
  elGravity_losses_at_specific_altitude.textContent = Gravity_losses_at_specific_altitude.toFixed(
    1
  );
  elGravity_losses.textContent = Gravity_lossesPr.toFixed(1);
  elAerodynamic_losses.textContent = Aerodynamic_losses.toFixed(1);
  var Summary_lossesPr = Gravity_lossesPr + Aerodynamic_losses + 145;
  elSummary_losses.textContent = Summary_lossesPr.toFixed(1);
  var Assumed_losses = Summary_lossesPr / Vsp_for_LEO;
  elAssumed_losses.textContent = (Assumed_losses * 100).toFixed(2);
  elVsp_with_losses.textContent = Vsp_with_losses.toFixed(1);
  elFirst_stage_average_trajectory_isp.textContent = First_stage_average_trajectory_isp.toFixed(
    1
  );
  elFirst_stage_propellant_mass.value = First_stage_propellant_mass.toFixed(1);
  elFirst_stage_dry_mass.value = First_stage_dry_mass.toFixed(1);
  elFirst_stage_final_mass.textContent = First_stage_final_mass.toFixed(1);
  elFirst_stage_delta_v.textContent = First_stage_delta_v.toFixed(1);
  elFairing_jettison_delta_v.textContent = Fairing_jettison_delta_v.toFixed(1);
  elSecond_stage_total_Start_mass.textContent = Second_stage_total_Start_mass.toFixed(
    1
  );
  elSecond_stage_total_mass_before_fairing_jettison.textContent = Second_stage_total_mass_before_fairing_jettison.toFixed(
    1
  );
  elSecond_stage_total_mass_before_battery_jettison.textContent = Second_stage_total_mass_before_battery_jettison.toFixed(
    1
  );
  elSecond_stage_delta_v_before_battery_jettison.textContent = Second_stage_delta_v_before_battery_jettison.toFixed(
    1
  );
  elSecond_stage_final_mass.textContent = Second_stage_final_mass.toFixed(1);
  elSecond_stage_delta_v.textContent = Second_stage_delta_v.toFixed(1);
  elSecond_stage_dry_mass.value = Second_stage_dry_mass.toFixed(1);
  elSecond_stage_propellant_mass.value = Second_stage_propellant_mass.toFixed(
    1
  );
  elTransfer_Orbit_stage_delta_v_required.textContent = Transfer_Orbit_stage_delta_v_required.toFixed(
    1
  );
  elTransfer_Orbit_stage_total_Start_mass.textContent = Transfer_Orbit_stage_total_Start_mass.toFixed(
    1
  );
  elTransfer_Orbit_stage_final_mass.textContent = Transfer_Orbit_stage_final_mass.toFixed(
    1
  );
  elTransfer_Orbit_stage_dry_mass.value = Transfer_Orbit_stage_dry_mass.toFixed(
    1
  );
  elTransfer_Orbit_stage_propellant_mass.value = Transfer_Orbit_stage_propellant_mass.toFixed(
    1
  );

  elFirst_stage_run_time.textContent = (
    ((First_stage_propellant_mass / 100) *
      (100 - Unused_propellant_of_1st_Stage)) /
    ((Lift_off_Mass * Thrust_to_weight_ratio) / First_stage_isp_sea_level)
  ).toFixed(0);
  if (elRocket.selectedIndex == 0) {
    var Second_stage_engine_thrust = parseFloat(
      elSecond_stage_engine_thrust.value
    );
    var Second_stage_engines_number = parseFloat(
      elSecond_stage_engines_number.value
    );
    elSecond_stage_run_time.textContent = (
      ((Second_stage_propellant_mass / 100) *
        (100 - Unused_propellant_of_2nd_Stage)) /
      ((Second_stage_engine_thrust * Second_stage_engines_number) /
        Second_stage_isp_vac)
    ).toFixed(0);
  } else {
    elSecond_stage_run_time.textContent = "---";
  }
  //		elTransfer_Orbit_stage_run_time.textContent = (Transfer_Orbit_stage_propellant_mass/(Transfer_Orbit_stage_total_Start_mass*0.5/Transfer_Orbit_Stage_isp)).toFixed(0);
}

function Calculate() {
  if (elLimitation.checked) SetLimitation();
  CalculateTargetVelocity();
  CalculateTargetMass();
  if (Absolute_Mass == 1) MassRecalculate();
  if (el3rd_Stage_mass_ratio.value == 0) elRequired.textContent = "(required)";
  else elRequired.textContent = " ";
}

function Calculate_Rel() {
  Absolute_Mass = 0;
  Calculate();
  updateFuel();
}

function CalculationError() {
  var Lift_off_Mass = parseFloat(elLift_off_Mass.textContent);
  var First_stage_final_mass = parseFloat(elFirst_stage_final_mass.textContent);
  var Second_stage_total_Start_mass = parseFloat(
    elSecond_stage_total_Start_mass.textContent
  );
  var Second_stage_total_mass_before_fairing_jettison = parseFloat(
    elSecond_stage_total_mass_before_fairing_jettison.textContent
  );
  var Fairing_mass = parseFloat(elFairing_mass.value);
  var Second_stage_total_mass_before_battery_jettison = parseFloat(
    elSecond_stage_total_mass_before_battery_jettison.textContent
  );
  var Jettisoned_battery_mass = parseFloat(elJettisoned_battery_mass.value);
  var Second_stage_final_mass = parseFloat(
    elSecond_stage_final_mass.textContent
  );
  var Transfer_Orbit_stage_total_Start_mass = parseFloat(
    elTransfer_Orbit_stage_total_Start_mass.textContent
  );
  var Transfer_Orbit_stage_final_mass = parseFloat(
    elTransfer_Orbit_stage_final_mass.textContent
  );
  var First_stage_average_trajectory_isp = parseFloat(
    elFirst_stage_average_trajectory_isp.textContent
  );
  var Second_stage_isp_vac = parseFloat(elSecond_stage_isp_vac.value);
  var Transfer_Orbit_Stage_isp = parseFloat(elTransfer_Orbit_Stage_isp.value);
  var Vsp_with_losses = parseFloat(elVsp_with_losses.textContent);
  var Summary_Delta_V =
    9.80665 *
      First_stage_average_trajectory_isp *
      Math.log(Lift_off_Mass / First_stage_final_mass) +
    9.80665 *
      Second_stage_isp_vac *
      Math.log(
        Second_stage_total_Start_mass /
          Second_stage_total_mass_before_fairing_jettison
      ) +
    9.80665 *
      Second_stage_isp_vac *
      Math.log(
        (Second_stage_total_mass_before_fairing_jettison - Fairing_mass) /
          Second_stage_total_mass_before_battery_jettison
      ) +
    9.80665 *
      Second_stage_isp_vac *
      Math.log(
        (Second_stage_total_mass_before_battery_jettison -
          Jettisoned_battery_mass) /
          Second_stage_final_mass
      ) +
    9.80665 *
      Transfer_Orbit_Stage_isp *
      Math.log(
        Transfer_Orbit_stage_total_Start_mass / Transfer_Orbit_stage_final_mass
      );

  elCalculation_Error.textContent = (Vsp_with_losses - Summary_Delta_V).toFixed(
    1
  );

  var First_stage_propellant_mass = parseFloat(
    elFirst_stage_propellant_mass.value
  );
  var First_stage_dry_mass = parseFloat(elFirst_stage_dry_mass.value);
  var Second_stage_propellant_mass = parseFloat(
    elSecond_stage_propellant_mass.value
  );
  var Second_stage_dry_mass = parseFloat(elSecond_stage_dry_mass.value);
  var Transfer_Orbit_stage_propellant_mass = parseFloat(
    elTransfer_Orbit_stage_propellant_mass.value
  );
  var Transfer_Orbit_stage_dry_mass = parseFloat(
    elTransfer_Orbit_stage_dry_mass.value
  );
  var Payload_mass = parseFloat(elPayload_mass_calculated.textContent);
  var Summary_Mass =
    First_stage_propellant_mass +
    First_stage_dry_mass +
    Second_stage_propellant_mass +
    Second_stage_dry_mass +
    Transfer_Orbit_stage_propellant_mass +
    Transfer_Orbit_stage_dry_mass +
    Fairing_mass +
    Payload_mass;

  //		elCalculation_Error.textContent = (Summary_Mass - Lift_off_Mass).toFixed(1);
}

function updateStartingPoint() {
  elStarting_point_Altitude.value =
    s_start_point_data[elStartingPoint.selectedIndex][3];
  elSpaceport_latitude.value =
    s_start_point_data[elStartingPoint.selectedIndex][1];
}

function updateStartingPointAndCalc() {
  updateStartingPoint();
  updateOrbit();
  Calculate();
}

function updateOrbit() {
  elOrbit_Perigee.value = s_orbit_data[elOrbit.selectedIndex][1];

  elOrbit_Apogee.value = s_orbit_data[elOrbit.selectedIndex][2];

  if (s_orbit_data[elOrbit.selectedIndex][3] < 0)
    elOrbit_Inclination.value =
      s_start_point_data[elStartingPoint.selectedIndex][4];
  else elOrbit_Inclination.value = s_orbit_data[elOrbit.selectedIndex][3];

  elExtra_speed_for_flight_to_the_planets.value =
    s_orbit_data[elOrbit.selectedIndex][4];

  if (elOrbit.selectedIndex == 4) {
    for (var i = 0; i < elsGEO.length; i++) elsGEO[i].removeAttribute("style");
    for (var i = 0; i < elsGEOI.length; i++)
      elsGEOI[i].setAttribute("style", "display:none");
  } else {
    for (var i = 0; i < elsGEO.length; i++)
      elsGEO[i].setAttribute("style", "display:none");
    for (var i = 0; i < elsGEOI.length; i++)
      elsGEOI[i].removeAttribute("style");
  }
  elOrbitDescription.textContent = s_orbit_data[elOrbit.selectedIndex][5];
  if (elOrbit.selectedIndex > 4) elReference.textContent = "Reference ";
  else elReference.textContent = "";
}

function LatitudeChange() {
  if (elOrbit.selectedIndex == 0) {
    Spaceport_latitude = Math.abs(parseFloat(elSpaceport_latitude.value));
    Orbit_Inclination = parseFloat(elOrbit_Inclination.value);

    if (Orbit_Inclination < Spaceport_latitude) {
      Orbit_Inclination = Spaceport_latitude;
      elOrbit_Inclination.value = Orbit_Inclination.toFixed(2);
    }
  }

  if (elOrbit.selectedIndex > 2) {
    Spaceport_latitude = Math.abs(parseFloat(elSpaceport_latitude.value));
    elOrbit_Inclination.value = Spaceport_latitude.toFixed(2);
  }

  Calculate();
}

function InclinationChange() {
  if (elOrbit.selectedIndex == 0) {
    Spaceport_latitude = Math.abs(parseFloat(elSpaceport_latitude.value));
    Orbit_Inclination = parseFloat(elOrbit_Inclination.value);
    if (Orbit_Inclination < Spaceport_latitude) {
      Orbit_Inclination = Spaceport_latitude;
      elOrbit_Inclination.value = Orbit_Inclination.toFixed(2);
    }
  }
  Calculate();
}

function OrbitChange() {
  var Orbit_Apogee = parseFloat(elOrbit_Apogee.value);
  if (Orbit_Apogee == 0) {
  } else {
    var Orbit_Perigee = parseFloat(elOrbit_Perigee.value);
    if (Orbit_Apogee < Orbit_Perigee)
      elOrbit_Apogee.value = Orbit_Perigee.toFixed(0);
  }
  Calculate();
}

function RangeMinMax(range, input_field, fuel, cycle, index) {
  var Lift_off_Mass = parseFloat(elLift_off_Mass.textContent);
  if (Lift_off_Mass > 460000) Lift_off_Mass = 460000;
  var cycle_corr = 1;
  if (index < 2) {
    cycle_corr = 1;
    if (cycle == 3) cycle_corr = 1.6;
    var orsc_corr = 0;
    var ThrustToWeight_corr = 0;
    if (index == 0)
      ThrustToWeight_corr = 0.8 * (elThrust_to_weight_ratio.value - 1.2);
    if (index == 1) ThrustToWeight_corr = 0.8 * (Thrust_To_Weight_2st - 1.1);

    if (cycle == 0) orsc_corr = 0.5; //Staged Combustion
    if (cycle == 2) orsc_corr = 0.5; //Electric
    if (fuel == 4) {
      cycle_corr = 1;
      orsc_corr = 0;
    }
    var val_min =
      (s_fuel_data_min[fuel][index] + orsc_corr + ThrustToWeight_corr) *
      cycle_corr *
      Math.pow(Lift_off_Mass / 460000, -0.085);
    var val_max =
      (s_fuel_data_max[fuel][index] + orsc_corr + ThrustToWeight_corr) *
      cycle_corr *
      Math.pow(Lift_off_Mass / 460000, -0.085);
  } else {
    cycle_corr = 1;
    if (index > 5) cycle_corr = s_cycle_data[cycle][index - 6];
    if (fuel == 3) cycle_corr = 1;
    if (fuel == 4) cycle_corr = 1;
    var val_min = s_fuel_data_min[fuel][index] * cycle_corr;
    var val_max = s_fuel_data_max[fuel][index] * cycle_corr;
  }

  var input_value = parseFloat(input_field.value);

  if ("min" in range) range.min = val_min * 100;
  else range.setAttribute("min", val_min * 100);

  if ("max" in range) range.max = val_max * 100;
  else range.setAttribute("max", val_max * 100);
  if (s_fuel_invert[index])
    range.value = (val_min + val_max - input_value) * 100;
  else range.value = input_value * 100;
  CalculateScore();
}

function updateCycle() {
  var fuel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  fuel[6] = elFuel.selectedIndex;
  fuel[7] = elFuel.selectedIndex;
  fuel[8] = elFuel2.selectedIndex;
  fuel[9] = elFuel3.selectedIndex;

  var cycle = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  cycle[6] = elCycle.selectedIndex;
  cycle[7] = elCycle.selectedIndex;
  cycle[8] = elCycle2.selectedIndex;
  cycle[9] = elCycle3.selectedIndex;

  for (var i = 6; i < 10; ++i)
    RangeMinMax(s_slider[i], s_slider_edit[i], fuel[i], cycle[i], i);
  ElectricChange();
}
function updateCycleAndCalc() {
  updateCycle();
  if (elLimitation.checked) {
    DelLimitation();
    SetLimitation();
  }
  updateFuel();
  if (elSet_averages.checked) SetAverages(0, 10);
  Calculate();
}

function updateFuel() {
  var fuel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  fuel[0] = elFuel.selectedIndex;
  fuel[1] = elFuel2.selectedIndex;
  fuel[2] = elFuel3.selectedIndex;
  fuel[3] = elFuel.selectedIndex;
  fuel[4] = elFuel2.selectedIndex;
  fuel[5] = elFuel3.selectedIndex;
  fuel[6] = elFuel.selectedIndex;
  fuel[7] = elFuel.selectedIndex;
  fuel[8] = elFuel2.selectedIndex;
  fuel[9] = elFuel3.selectedIndex;

  var cycle = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  cycle[0] = elCycle.selectedIndex;
  cycle[1] = elCycle2.selectedIndex;
  cycle[2] = elCycle3.selectedIndex;
  cycle[3] = elCycle.selectedIndex;
  cycle[4] = elCycle2.selectedIndex;
  cycle[5] = elCycle3.selectedIndex;
  cycle[6] = elCycle.selectedIndex;
  cycle[7] = elCycle.selectedIndex;
  cycle[8] = elCycle2.selectedIndex;
  cycle[9] = elCycle3.selectedIndex;
  for (var i = 0; i < 10; ++i)
    RangeMinMax(s_slider[i], s_slider_edit[i], fuel[i], cycle[i], i);
}
function updateFuelAndCalc() {
  updateFuel();
  SolidChange();
  if (elLimitation.checked) {
    DelLimitation();
    SetLimitation();
  }
  if (elSet_averages.checked) SetAverages(0, 10);
  Calculate();
}

function updateStages() {
  var stages = elStages.selectedIndex;
  if (stages == 0) {
    el3rd_Stage_mass_ratio.value = 0;
    Calculate();
  } else {
    el3rd_Stage_mass_ratio.value = s_rocket_data[elRocket.selectedIndex][9];
    if (el3rd_Stage_mass_ratio.value == 0) {
      el3rd_Stage_mass_ratio.value = 3;
    }
  }
  Calculate();
  f3stagesChange();
  CalculateScore();
}

function updateEngine1() {
  var Index = 0;
  var engine = elEngine1.value;
  for (var i = 0; i < s_engine_count; ++i) {
    if (s_engine_data[i][0] == engine) {
      Index = i;
      break;
    }
  }

  elFuel.selectedIndex = s_engine_data[Index][4];
  elCycle.selectedIndex = s_engine_data[Index][5];
  elFirst_stage_engine_thrust.value = s_engine_data[Index][1];
  elFirst_stage_isp_sea_level.value = s_engine_data[Index][2];
  elFirst_stage_isp_vac.value = s_engine_data[Index][3];
  if (s_desined_first == true)
    elFirst_stage_engines_number.value = s_engine_data[Index][6];
  updateWeight();
  updateCycle();
  updateFuel();
  SolidChange();
  SetAverages(0, 6);
  if (s_desined_first == true) {
    elEngine2.selectedIndex = Index / 2;
    updateEngine2();
  }
}

function updateEngine2() {
  var Index = 0;
  var engine = elEngine2.value;
  for (var i = 0; i < s_engine_count; ++i) {
    if (s_engine_data[i][0] == engine) {
      Index = i;
      break;
    }
  }

  elFuel2.selectedIndex = s_engine_data[Index][4];
  elCycle2.selectedIndex = s_engine_data[Index][5];
  elSecond_stage_engine_thrust.value = s_engine_data[Index][1];
  elSecond_stage_isp_vac.value = s_engine_data[Index][3];
  if (s_desined_first == true)
    elSecond_stage_engines_number.value = s_engine_data[Index][6];
  s_desined_first = false;
  updateWeight();
  updateCycle();
  updateFuel();
  SolidChange();
  SetAverages(0, 6);
}

function updateWeight() {
  if (elRocket.selectedIndex == 0) {
    var First_stage_engines_number = (
      1 * elFirst_stage_engines_number.value
    ).toFixed(0);
    var Second_stage_engines_number = (
      1 * elSecond_stage_engines_number.value
    ).toFixed(0);
    elFirst_stage_engines_number.value = First_stage_engines_number;
    elSecond_stage_engines_number.value = Second_stage_engines_number;
    Lift_off_Mass =
      (1 / elThrust_to_weight_ratio.value) *
      elFirst_stage_engine_thrust.value *
      First_stage_engines_number;
    Fairing_mass = parseFloat((0.0045 * Lift_off_Mass).toFixed(0));
    Assumed_payload_mass = parseFloat((0.015 * Lift_off_Mass).toFixed(0));
    Payload_mass = Assumed_payload_mass;
    Rocket_Mass = Lift_off_Mass - Fairing_mass - Assumed_payload_mass;
    elFairing_mass.value = Fairing_mass;
    elAssumed_payload_mass.value = Assumed_payload_mass;
    elRocket_Mass.value = Rocket_Mass.toFixed(0);
    //			elLift_off_Mass.textContent = Lift_off_Mass.toFixed(0);
    var Max_midsection_D = 4.1 * Math.pow(Lift_off_Mass / 460000, 1 / 3);
    elMax_midsection_D.value = Max_midsection_D.toFixed(1);
    var SecStage_mass_ratio =
      (90.909 *
        elSecond_stage_engine_thrust.value *
        Second_stage_engines_number) /
      Lift_off_Mass;
    var SecStage_mass_ratio2 = 2 * SecStage_mass_ratio;
    if (SecStage_mass_ratio > 30) SecStage_mass_ratio = 30;
    if (SecStage_mass_ratio < 12) SecStage_mass_ratio = 12;
    if (SecStage_mass_ratio2 < 12) SecStage_mass_ratio = SecStage_mass_ratio2;
    el2nd_Stage_mass_ratio.value = SecStage_mass_ratio.toFixed(1);
    Thrust_To_Weight_2st =
      (Second_stage_engines_number * elSecond_stage_engine_thrust.value) /
      ((Lift_off_Mass * SecStage_mass_ratio) / 100);
    updateFuel();
    SetAverages(0, 6);
  }
  Calculate();
}

function updateSlider(index) {
  if (s_fuel_invert[index]) {
    var vmin;
    var vmax;
    if ("min" in s_slider[index]) vmin = parseFloat(s_slider[index].min);
    else vmin = s_slider[index].getAttribute("min");

    if ("max" in s_slider[index]) vmax = parseFloat(s_slider[index].max);
    else vmax = s_slider[index].getAttribute("max");
    s_slider_edit[index].value = (
      (vmin + vmax - s_slider[index].value) /
      100
    ).toFixed(2);
  } else s_slider_edit[index].value = s_slider[index].value / 100;
  CalculateScore();
  Calculate();
  CalculationError();
}

function updateSlider0(index) {
  s_slider_edit[index].value = s_slider[index].value;
  Calculate();
}

function updateSliderEdit(index) {
  var val_min;
  var val_max;

  if (s_fuel_invert[index]) {
    if ("min" in s_slider[index]) val_min = parseFloat(s_slider[index].min);
    else val_min = s_slider[index].getAttribute("min");

    if ("max" in s_slider[index]) val_max = parseFloat(s_slider[index].max);
    else val_max = s_slider[index].getAttribute("max");
    s_slider[index].value =
      val_min + val_max - s_slider_edit[index].value * 100;
  } else s_slider[index].value = s_slider_edit[index].value * 100;
  CalculateScore();
}

function updateSliderEdit0(index) {
  s_slider[index].value = s_slider_edit[index].value;
}

function update1st_Dry_to_Wet_mass_ratio_Range() {
  Absolute_Mass = 0;
  updateSlider(0);
}

function update2nd_Dry_to_Wet_mass_ratio_Range() {
  Absolute_Mass = 0;
  updateSlider(1);
}

function update3rd_Dry_to_Wet_mass_ratio_Range() {
  Absolute_Mass = 0;
  updateSlider(2);
}

function updateUnused_propellant_of_1st_Stage_Range() {
  updateSlider(3);
}

function updateUnused_propellant_of_2nd_Stage_Range() {
  updateSlider(4);
}

function updateUnused_propellant_of_Transfer_Orbit_Stage_Range() {
  updateSlider(5);
}

function updateFirst_stage_isp_sea_level_Range() {
  updateSlider(6);
}

function updateFirst_stage_isp_vac_Range() {
  updateSlider(7);
}

function updateSecond_stage_isp_vac_Range() {
  updateSlider(8);
}

function updateTransfer_Orbit_Stage_isp_Range() {
  updateSlider(9);
}

function updateSpecific_Impulse_Variation_Range() {
  updateSlider0(10);
}

function update1st_Dry_to_Wet_mass_ratio() {
  updateSliderEdit(0);
}

function update2nd_Dry_to_Wet_mass_ratio() {
  updateSliderEdit(1);
}

function update3rd_Dry_to_Wet_mass_ratio() {
  updateSliderEdit(2);
}

function updateUnused_propellant_of_1st_Stage() {
  updateSliderEdit(3);
}

function updateUnused_propellant_of_2nd_Stage() {
  updateSliderEdit(4);
}

function updateUnused_propellant_of_Transfer_Orbit_Stage() {
  updateSliderEdit(5);
}

function updateFirst_stage_isp_sea_level() {
  updateSliderEdit(6);
}

function updateFirst_stage_isp_vac() {
  updateSliderEdit(7);
}

function updateSecond_stage_isp_vac() {
  updateSliderEdit(8);
}

function updateTransfer_Orbit_Stage_isp() {
  updateSliderEdit(9);
}

function updateSpecific_Impulse_Variation() {
  updateSliderEdit0(10);
}

function updateOrbitAndCalc() {
  updateOrbit();
  Calculate();
}

function updateRocket() {
  Absolute_Mass = 0;
  elSet_averages.checked = false;
  elSet_AllMin.checked = false;
  elSet_AllMax.checked = false;
  if (elRocket.selectedIndex == 0) {
    elLimitation.checked = false;
    elEngine1.selectedIndex = 0;
    elEngine2.selectedIndex = 0;
    s_desined_first = true;
    updateEngine1();
    s_desined_first = true;
  } else elLimitation.checked = false;

  elThrust_to_weight_ratio.value = s_rocket_data[elRocket.selectedIndex][1];
  elLift_off_Mass.textContent =
    s_rocket_data[elRocket.selectedIndex][2] +
    s_rocket_data[elRocket.selectedIndex][4] +
    s_rocket_data[elRocket.selectedIndex][7];
  elRocket_Mass.value = s_rocket_data[elRocket.selectedIndex][2];

  elMax_midsection_D.value = s_rocket_data[elRocket.selectedIndex][3];
  elFairing_mass.value = s_rocket_data[elRocket.selectedIndex][4];
  elFairing_jettison_velocity.value = s_rocket_data[elRocket.selectedIndex][5];
  elJettisoned_battery_mass.value = s_rocket_data[elRocket.selectedIndex][6];
  elAssumed_payload_mass.value = s_rocket_data[elRocket.selectedIndex][7];
  Payload_mass = parseFloat(elAssumed_payload_mass.value);
  var v2nd_Stage_mass_rat = s_rocket_data[elRocket.selectedIndex][8];
  var v3rd_Stage_mass_rat = s_rocket_data[elRocket.selectedIndex][9];
  var Fairing = s_rocket_data[elRocket.selectedIndex][4];
  var Payload = s_rocket_data[elRocket.selectedIndex][7];

  el2nd_Stage_mass_ratio.value = s_rocket_data[elRocket.selectedIndex][8];
  el3rd_Stage_mass_ratio.value = s_rocket_data[elRocket.selectedIndex][9];

  el1st_Dry_to_Wet_mass_ratio.value = s_rocket_data[elRocket.selectedIndex][10];
  el2nd_Dry_to_Wet_mass_ratio.value = s_rocket_data[elRocket.selectedIndex][11];
  el3rd_Dry_to_Wet_mass_ratio.value = s_rocket_data[elRocket.selectedIndex][12];
  elUnused_propellant_of_1st_Stage.value =
    s_rocket_data[elRocket.selectedIndex][13];
  elUnused_propellant_of_2nd_Stage.value =
    s_rocket_data[elRocket.selectedIndex][14];
  elUnused_propellant_of_Transfer_Orbit_Stage.value =
    s_rocket_data[elRocket.selectedIndex][15];

  elSpecific_Impulse_Variation.value = 100;
  updateSliderEdit0(10);

  elFirst_stage_isp_sea_level.value =
    (s_rocket_data[elRocket.selectedIndex][16] *
      elSpecific_Impulse_Variation.value) /
    100;
  elFirst_stage_isp_vac.value =
    (s_rocket_data[elRocket.selectedIndex][17] *
      elSpecific_Impulse_Variation.value) /
    100;
  elSecond_stage_isp_vac.value =
    (s_rocket_data[elRocket.selectedIndex][18] *
      elSpecific_Impulse_Variation.value) /
    100;
  elTransfer_Orbit_Stage_isp.value =
    (s_rocket_data[elRocket.selectedIndex][19] *
      elSpecific_Impulse_Variation.value) /
    100;

  var spacePort = s_rocket_data[elRocket.selectedIndex][26];
  for (var i = 0; i < s_start_point_count; ++i) {
    if (s_start_point_data[i][0] == spacePort) {
      elStartingPoint.selectedIndex = i;
      updateStartingPoint();
      break;
    }
  }

  var orbit = s_rocket_data[elRocket.selectedIndex][27];
  for (var i = 0; i < s_orbit_count; ++i) {
    if (s_orbit_data[i][0] == orbit) {
      elOrbit.selectedIndex = i;
      updateOrbit();
      break;
    }
  }

  elFuel.selectedIndex = s_rocket_data[elRocket.selectedIndex][20];
  elFuel2.selectedIndex = s_rocket_data[elRocket.selectedIndex][22];
  elFuel3.selectedIndex = s_rocket_data[elRocket.selectedIndex][24];
  elCycle.selectedIndex = s_rocket_data[elRocket.selectedIndex][21];
  elCycle2.selectedIndex = s_rocket_data[elRocket.selectedIndex][23];
  elCycle3.selectedIndex = s_rocket_data[elRocket.selectedIndex][25];

  updateFuel();
  SolidChange();
  updateCycle();

  if (elLimitation.checked) SetLimitation();
  elAir_Launch.checked = s_rocket_data[elRocket.selectedIndex][28] != 0;
  AirLaunchChange(0);

  elRocketDescription.textContent = s_rocket_data[elRocket.selectedIndex][29];

  if (el3rd_Stage_mass_ratio.value == 0) {
    elStages.selectedIndex = 0;
  } else {
    elStages.selectedIndex = 1;
  }
  f3stagesChange();

  if (elRocket.selectedIndex == 0) {
    for (var i = 0; i < elProjecting.length; i++)
      elProjecting[i].removeAttribute("style");
    for (var i = 0; i < elProjectingH.length; i++)
      elProjectingH[i].setAttribute("style", "display:none");
    SetAverages(0, 6);
    updateWeight();
  } else {
    for (var i = 0; i < elProjecting.length; i++)
      elProjecting[i].setAttribute("style", "display:none");
    for (var i = 0; i < elProjectingH.length; i++)
      elProjectingH[i].removeAttribute("style");
    DelAverages();
  }
}

function updateRocketAndCalc() {
  updateRocket();
  Calculate();
}

function ExpandChange() {
  if (elExpand.getAttribute("isbool") == "1") {
    elExpand.setAttribute("isBool", 0);
    elExpand.innerHTML = "Show Less";
    elExpand.title = "Desplay less information";
    for (var i = 0; i < elsExpanding.length; i++)
      elsExpanding[i].removeAttribute("style");
    if (parseFloat(elJettisoned_battery_mass.value) > 0)
      for (var i = 0; i < elsExpandingB.length; i++)
        elsExpandingB[i].removeAttribute("style");
    if (elStages.selectedIndex == 1)
      for (var i = 0; i < elsExpanding3.length; i++)
        elsExpanding3[i].removeAttribute("style");
  } else {
    elExpand.setAttribute("isBool", 1);
    elExpand.innerHTML = "Advanced...";
    elExpand.title = "Display more information";
    for (var i = 0; i < elsExpanding.length; i++)
      elsExpanding[i].setAttribute("style", "display:none");
    for (var i = 0; i < elsExpandingB.length; i++)
      elsExpandingB[i].setAttribute("style", "display:none");
    for (var i = 0; i < elsExpanding3.length; i++)
      elsExpanding3[i].setAttribute("style", "display:none");
  }
}

function f3stagesChange() {
  if (el3rd_Stage_mass_ratio.value == 0) {
    for (var i = 0; i < els3stages.length; i++)
      els3stages[i].setAttribute("style", "display:none");
    for (var i = 0; i < elsExpanding3.length; i++)
      elsExpanding3[i].setAttribute("style", "display:none");
  } else {
    for (var i = 0; i < els3stages.length; i++)
      els3stages[i].removeAttribute("style");
    if (elExpand.getAttribute("isbool") == "0")
      for (var i = 0; i < elsExpanding3.length; i++)
        elsExpanding3[i].removeAttribute("style");
  }
}

function SolidChange() {
  if (elFuel.selectedIndex == 4) {
    document.getElementById("Cycle").style.visibility = "hidden";
  } else {
    document.getElementById("Cycle").style.visibility = "visible";
  }

  if (elFuel2.selectedIndex == 4) {
    document.getElementById("Cycle2").style.visibility = "hidden";
  } else {
    document.getElementById("Cycle2").style.visibility = "visible";
  }
  if (elFuel3.selectedIndex == 4) {
    document.getElementById("Cycle3").style.visibility = "hidden";
  } else {
    document.getElementById("Cycle3").style.visibility = "visible";
  }
}

function ElectricChange() {
  if (elCycle2.selectedIndex == 2) {
    for (var i = 0; i < elsElectric.length; i++)
      elsElectric[i].removeAttribute("style");
  } else {
    for (var i = 0; i < elsElectric.length; i++) {
      elJettisoned_battery_mass.value = 0;
      elsElectric[i].setAttribute("style", "display:none");
    }
  }
}

function AirLaunchChange(Checked) {
  if (elAir_Launch.checked) {
    elLimitation.checked = false;

    var Starting_point_Altitude_Old = parseFloat(
      elStarting_point_Altitude.value
    );
    var Starting_point_Pressure_Old = Math.exp(
      -Starting_point_Altitude_Old / 7.16
    );
    Starting_point_Altitude = 12;
    elStarting_point_Altitude.value = Starting_point_Altitude;
    elAdditional_Speed.value = 250;
    if (Checked == 1) {
      var Starting_point_Pressure = Math.exp(-Starting_point_Altitude / 7.16);
      var First_stage_isp_sea_level = parseFloat(
        elFirst_stage_isp_sea_level.value
      );
      var First_stage_isp_vac = parseFloat(elFirst_stage_isp_vac.value);
      var First_stage_isp_sea_level_ = First_stage_isp_sea_level;
      First_stage_isp_sea_level =
        First_stage_isp_vac -
        ((First_stage_isp_vac - First_stage_isp_sea_level) /
          Starting_point_Pressure_Old) *
          Starting_point_Pressure;
      elFirst_stage_isp_sea_level.value = First_stage_isp_sea_level.toFixed(2);
      var Thrust_to_weight_ratio = parseFloat(elThrust_to_weight_ratio.value);
      elThrust_to_weight_ratio.value = (
        (Thrust_to_weight_ratio / First_stage_isp_sea_level_) *
        First_stage_isp_sea_level
      ).toFixed(3);
    }
  } else {
    Starting_point_Altitude_Old = parseFloat(elStarting_point_Altitude.value);
    Starting_point_Pressure_Old = Math.exp(-Starting_point_Altitude_Old / 7.16);
    Starting_point_Altitude =
      s_start_point_data[elStartingPoint.selectedIndex][3];
    elStarting_point_Altitude.value = Starting_point_Altitude;
    elAdditional_Speed.value = 0;

    Starting_point_Pressure = Math.exp(-Starting_point_Altitude / 7.16);
    First_stage_isp_sea_level = parseFloat(elFirst_stage_isp_sea_level.value);
    First_stage_isp_vac = parseFloat(elFirst_stage_isp_vac.value);
    First_stage_isp_sea_level_ = First_stage_isp_sea_level;
    First_stage_isp_sea_level =
      First_stage_isp_vac -
      ((First_stage_isp_vac - First_stage_isp_sea_level) /
        Starting_point_Pressure_Old) *
        Starting_point_Pressure;
    elFirst_stage_isp_sea_level.value = First_stage_isp_sea_level.toFixed(1);
    Thrust_to_weight_ratio = parseFloat(elThrust_to_weight_ratio.value);
    elThrust_to_weight_ratio.value = (
      (Thrust_to_weight_ratio / First_stage_isp_sea_level_) *
      First_stage_isp_sea_level
    ).toFixed(3);
  }
}

function AirLaunchChangeAndCalc() {
  AirLaunchChange(1);
  Calculate();
}

function LimitationChange() {
  if (elLimitation.checked) {
    SetLimitation();
    updateFuel();
    Calculate();
  } else {
    DelLimitation();
    updateFuel();
    Calculate();
  }
  CalculationError();
  CalculateScore();
}

function SetLimitation() {
  var fuel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  fuel[0] = elFuel.selectedIndex;
  fuel[1] = elFuel2.selectedIndex;
  fuel[2] = elFuel3.selectedIndex;
  fuel[3] = elFuel.selectedIndex;
  fuel[4] = elFuel2.selectedIndex;
  fuel[5] = elFuel3.selectedIndex;
  fuel[6] = elFuel.selectedIndex;
  fuel[7] = elFuel.selectedIndex;
  fuel[8] = elFuel2.selectedIndex;
  fuel[9] = elFuel3.selectedIndex;

  var cycle = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  cycle[0] = elCycle.selectedIndex;
  cycle[1] = elCycle2.selectedIndex;
  cycle[2] = elCycle3.selectedIndex;
  cycle[3] = elCycle.selectedIndex;
  cycle[4] = elCycle2.selectedIndex;
  cycle[5] = elCycle3.selectedIndex;
  cycle[6] = elCycle.selectedIndex;
  cycle[7] = elCycle.selectedIndex;
  cycle[8] = elCycle2.selectedIndex;
  cycle[9] = elCycle3.selectedIndex;

  for (var i = 0; i < 10; ++i) {
    var Lift_off_Mass = parseFloat(elLift_off_Mass.textContent);
    //			if(Lift_off_Mass > 460000) Lift_off_Mass = 460000;
    var cycle_corr = 1;
    if (i < 2) {
      cycle_corr = 1;
      if (cycle[i] == 3) cycle_corr = 1.6;
      var orsc_corr = 0;
      var ThrustToWeight_corr = 0;
      if (i == 0)
        ThrustToWeight_corr = 0.8 * (elThrust_to_weight_ratio.value - 1.2);
      if (i == 1) ThrustToWeight_corr = 0.8 * (Thrust_To_Weight_2st - 1.1);

      if (cycle[i] == 0) orsc_corr = 0.5;
      if (fuel[i] == 4) {
        cycle_corr = 1;
        orsc_corr = 0;
      }
      var val_min =
        (s_fuel_data_min[fuel[i]][i] + orsc_corr + ThrustToWeight_corr) *
        cycle_corr *
        Math.pow(Lift_off_Mass / 460000, -0.085);
      var val_max =
        (s_fuel_data_max[fuel[i]][i] + orsc_corr + ThrustToWeight_corr) *
        cycle_corr *
        Math.pow(Lift_off_Mass / 460000, -0.085);
    } else {
      cycle_corr = 1;
      if (i > 5) cycle_corr = s_cycle_data[cycle[i]][i - 6];
      if (fuel[i] == 3) cycle_corr = 1;
      if (fuel[i] == 4) cycle_corr = 1;
      var val_min = s_fuel_data_min[fuel[i]][i] * cycle_corr;
      var val_max = s_fuel_data_max[fuel[i]][i] * cycle_corr;
    }

    var input_value = parseFloat(s_slider_edit[i].value);
    if (s_fuel_invert[i] == 1) {
      if (input_value < val_min) s_slider_edit[i].value = val_min.toFixed(3);
    } else {
      if (input_value > val_max) s_slider_edit[i].value = val_max.toFixed(3);
    }
  }
}

function DelLimitation() {
  if (elSet_averages.checked) {
  } else {
    s_slider_edit[0].value = s_rocket_data[elRocket.selectedIndex][10];
    s_slider_edit[1].value = s_rocket_data[elRocket.selectedIndex][11];
    s_slider_edit[2].value = s_rocket_data[elRocket.selectedIndex][12];
    s_slider_edit[3].value = s_rocket_data[elRocket.selectedIndex][13];
    s_slider_edit[4].value = s_rocket_data[elRocket.selectedIndex][14];
    s_slider_edit[5].value = s_rocket_data[elRocket.selectedIndex][15];
    s_slider_edit[6].value = s_rocket_data[elRocket.selectedIndex][16];
    s_slider_edit[7].value = s_rocket_data[elRocket.selectedIndex][17];
    s_slider_edit[8].value = s_rocket_data[elRocket.selectedIndex][18];
    s_slider_edit[9].value = s_rocket_data[elRocket.selectedIndex][19];
  }
}

function Set_averagesChange() {
  if (elSet_averages.checked) {
    elSet_AllMin.checked = false;
    elSet_AllMax.checked = false;
    SetAverages(0, 10);
    Calculate();
  } else {
    if (elRocket.selectedIndex > 0) DelAverages();
  }
}

function SetAverages(Istr, Ifin) {
  for (var i = Istr; i < Ifin; ++i) {
    s_slider[i].value =
      0.5 * (parseFloat(s_slider[i].max) + parseFloat(s_slider[i].min));
    updateSlider(i);
  }
  elSpecific_Impulse_Variation.value = 100;
  updateSliderEdit0(10);
}

function DelAverages() {
  DelLimitation();
  LimitationChange();
}

function Set_AllMinChange() {
  if (elSet_AllMin.checked) {
    elSet_averages.checked = false;
    elSet_AllMax.checked = false;
    SetAllMin();
    Calculate();
  } else {
    if (elRocket.selectedIndex > 0) DelAverages();
  }
}

function SetAllMin() {
  for (var i = 0; i < 10; ++i) {
    s_slider[i].value = parseFloat(s_slider[i].min);
    updateSlider(i);
  }
  elSpecific_Impulse_Variation.value = 100;
  updateSliderEdit0(10);
}

function Set_AllMaxChange() {
  if (elSet_AllMax.checked) {
    elSet_averages.checked = false;
    elSet_AllMin.checked = false;
    SetAllMax();
    Calculate();
  } else {
    if (elRocket.selectedIndex > 0) DelAverages();
  }
}

function SetAllMax() {
  for (var i = 0; i < 10; ++i) {
    s_slider[i].value = parseFloat(s_slider[i].max);
    updateSlider(i);
  }
  elSpecific_Impulse_Variation.value = 100;
  updateSliderEdit0(10);
}

function CalculateScore() {
  Aggressivity = 1;
  // if Pressure Fed
  if (elCycle.selectedIndex == 3) Aggressivity = Aggressivity - 1.25 * 0.5;
  if (elCycle2.selectedIndex == 3) Aggressivity = Aggressivity - 1.25 * 0.5;
  if ((elStages.selectedIndex == 1) & (elCycle3.selectedIndex == 3))
    Aggressivity = Aggressivity - 0.5 * 0.5;
  // if Lox/Methane
  if (elFuel.selectedIndex == 2) Aggressivity = Aggressivity + 1.25 * 0.3;
  if (elFuel2.selectedIndex == 2) Aggressivity = Aggressivity + 1.25 * 0.3;
  if ((elStages.selectedIndex == 1) & (elFuel3.selectedIndex == 2))
    Aggressivity = Aggressivity + 0.5 * 0.3;
  // if Lox/LH2
  if (elFuel.selectedIndex == 2) Aggressivity = Aggressivity + 1.25 * 0.8;
  if (elFuel2.selectedIndex == 2) Aggressivity = Aggressivity + 1.25 * 0.8;
  if ((elStages.selectedIndex == 1) & (elFuel3.selectedIndex == 2))
    Aggressivity = Aggressivity + 0.5 * 0.8;

  for (var i = 0; i < 6; ++i) {
    if ((i < 3) & (parseFloat(s_slider_edit[i].value) == 0))
      Aggressivity = 1 / 0;
    if (parseFloat(s_slider[i].max) > 0)
      Aggressivity =
        Aggressivity +
        1.25 *
          ScoreCalcWeight[elStages.selectedIndex][i] *
          Math.pow(
            Math.max(
              1e-3,
              1 -
                (parseFloat(s_slider_edit[i].value) * 100 -
                  parseFloat(s_slider[i].min)) /
                  (parseFloat(s_slider[i].max) - parseFloat(s_slider[i].min))
            ),
            1.5
          );
  }
  if (elStages.selectedIndex == 1) {
    for (var i = 6; i < 10; ++i) {
      if (i == 0) Aggressivity = 0;
      Aggressivity =
        Aggressivity +
        0.5 *
          ScoreCalcWeight[elStages.selectedIndex][i] *
          Math.pow(
            Math.max(
              1e-3,
              (parseFloat(s_slider_edit[i].value) * 100 -
                parseFloat(s_slider[i].min)) /
                (parseFloat(s_slider[i].max) - parseFloat(s_slider[i].min))
            ),
            1.5
          );
    }
  }
  if (Aggressivity < 0) Aggressivity = 0;
  elAggressivity.textContent = Aggressivity.toFixed(1);
}

function MassRecalculate() {
  Absolute_Mass = 1;
  elLimitation.checked = false;

  First_stage_propellant_mass = parseFloat(elFirst_stage_propellant_mass.value);
  First_stage_dry_mass = parseFloat(elFirst_stage_dry_mass.value);
  Second_stage_propellant_mass = parseFloat(
    elSecond_stage_propellant_mass.value
  );
  Second_stage_dry_mass = parseFloat(elSecond_stage_dry_mass.value);

  if (elStages.selectedIndex > 0) {
    Transfer_Orbit_stage_propellant_mass = parseFloat(
      elTransfer_Orbit_stage_propellant_mass.value
    );
    Transfer_Orbit_stage_dry_mass = parseFloat(
      elTransfer_Orbit_stage_dry_mass.value
    );
  } else {
    Transfer_Orbit_stage_propellant_mass = 0;
    Transfer_Orbit_stage_dry_mass = 0;
  }

  Fairing_mass = parseFloat(elFairing_mass.value);
  Jettisoned_battery_mass = parseFloat(elJettisoned_battery_mass.value);
  Assumed_payload_mass = parseFloat(elAssumed_payload_mass.value);

  Rocket_Mass =
    First_stage_propellant_mass +
    First_stage_dry_mass +
    Second_stage_propellant_mass +
    Second_stage_dry_mass +
    Transfer_Orbit_stage_propellant_mass +
    Transfer_Orbit_stage_dry_mass;
  elRocket_Mass.value = Rocket_Mass.toFixed(0);

  Lift_off_Mass = Rocket_Mass + Fairing_mass + Payload_mass_calculated;
  elLift_off_Mass.textContent = Lift_off_Mass.toFixed(0);

  v1st_Dry_to_Wet_mass_ratio =
    (First_stage_dry_mass /
      (First_stage_propellant_mass + First_stage_dry_mass)) *
    100;
  el1st_Dry_to_Wet_mass_ratio.value = v1st_Dry_to_Wet_mass_ratio.toFixed(3);

  v2nd_Dry_to_Wet_mass_ratio =
    (Second_stage_dry_mass /
      (Second_stage_propellant_mass + Second_stage_dry_mass)) *
    100;
  el2nd_Dry_to_Wet_mass_ratio.value = v2nd_Dry_to_Wet_mass_ratio.toFixed(3);

  v2nd_Stage_mass_ratio =
    ((Rocket_Mass - First_stage_dry_mass - First_stage_propellant_mass) /
      Rocket_Mass) *
    100;
  el2nd_Stage_mass_ratio.value = v2nd_Stage_mass_ratio.toFixed(3);

  if (elStages.selectedIndex > 0) {
    v3rd_Dry_to_Wet_mass_ratio =
      (Transfer_Orbit_stage_dry_mass /
        (Transfer_Orbit_stage_propellant_mass +
          Transfer_Orbit_stage_dry_mass)) *
      100;
    el3rd_Dry_to_Wet_mass_ratio.value = v3rd_Dry_to_Wet_mass_ratio.toFixed(3);

    v3rd_Stage_mass_ratio =
      ((Rocket_Mass -
        First_stage_dry_mass -
        First_stage_propellant_mass -
        Second_stage_dry_mass -
        Second_stage_propellant_mass) /
        Rocket_Mass) *
      100;
    el3rd_Stage_mass_ratio.value = v3rd_Stage_mass_ratio.toFixed(3);
  }
}

function MassRecalculateAndCalc() {
  MassRecalculate();
  Absolute_Mass = 1;
  Calculate();
}

function onPageLoad() {
  for (var i = 0; i < s_start_point_count; i++) {
    var opt = document.createElement("option");
    opt.value = s_start_point_data[i][0];
    opt.innerHTML = s_start_point_data[i][0];
    opt.title = s_start_point_data[i][5];
    elStartingPoint.appendChild(opt);
  }
  elStartingPoint.addEventListener("change", updateStartingPointAndCalc);

  for (var i = 0; i < s_rocket_count; i++) {
    var opt = document.createElement("option");
    opt.value = s_rocket_data[i][0];
    opt.innerHTML = s_rocket_data[i][0];
    opt.title = s_rocket_data[i][29];
    elRocket.appendChild(opt);
  }
  elRocket.addEventListener("change", updateRocketAndCalc);

  for (var i = 0; i < s_orbit_count; i++) {
    var opt = document.createElement("option");
    opt.value = s_orbit_data[i][0];
    opt.innerHTML = s_orbit_data[i][0];
    opt.title = s_orbit_data[i][5];
    elOrbit.appendChild(opt);
  }
  elOrbit.addEventListener("change", updateOrbitAndCalc);

  for (var i = 0; i < s_fuel_count; i++) {
    var opt = document.createElement("option");
    opt.value = s_fuel_name[i];
    opt.innerHTML = s_fuel_name[i];
    elFuel.appendChild(opt);
  }
  elFuel.addEventListener("change", updateFuelAndCalc);

  for (var i = 0; i < s_fuel_count; i++) {
    var opt = document.createElement("option");
    opt.value = s_fuel_name[i];
    opt.innerHTML = s_fuel_name[i];
    elFuel2.appendChild(opt);
  }
  elFuel2.addEventListener("change", updateFuelAndCalc);

  for (var i = 0; i < s_fuel_count; i++) {
    var opt = document.createElement("option");
    opt.value = s_fuel_name[i];
    opt.innerHTML = s_fuel_name[i];
    elFuel3.appendChild(opt);
  }
  elFuel3.addEventListener("change", updateFuelAndCalc);

  for (var i = 0; i < s_cycle_count; i++) {
    var opt = document.createElement("option");
    opt.value = s_cycle_name[i][0];
    opt.innerHTML = s_cycle_name[i][0];
    opt.title = s_cycle_name[i][1];
    elCycle.appendChild(opt);
  }
  elCycle.addEventListener("change", updateCycleAndCalc);

  for (var i = 0; i < s_cycle_count; i++) {
    var opt = document.createElement("option");
    opt.value = s_cycle_name[i][0];
    opt.innerHTML = s_cycle_name[i][0];
    opt.title = s_cycle_name[i][1];
    elCycle2.appendChild(opt);
  }
  elCycle2.addEventListener("change", updateCycleAndCalc);

  for (var i = 0; i < s_cycle_count; i++) {
    var opt = document.createElement("option");
    opt.value = s_cycle_name[i][0];
    opt.innerHTML = s_cycle_name[i][0];
    opt.title = s_cycle_name[i][1];
    elCycle3.appendChild(opt);
  }
  elCycle3.addEventListener("change", updateCycleAndCalc);

  for (var i = 0; i < s_stages_count; i++) {
    var opt = document.createElement("option");
    opt.value = s_stages_name[i];
    opt.innerHTML = s_stages_name[i];
    elStages.appendChild(opt);
  }
  elStages.addEventListener("change", updateStages);

  for (var i = 0; i < s_engine_count; i++) {
    var opt = document.createElement("option");
    if (s_engine_data[i][2] > 0) {
      opt.value = s_engine_data[i][0];
      opt.innerHTML = s_engine_data[i][0];
      opt.title = s_engine_data[i][7];
      elEngine1.appendChild(opt);
    }
  }
  elEngine1.addEventListener("change", updateEngine1);

  for (var i = 0; i < s_engine_count; i++) {
    var opt = document.createElement("option");
    if (s_engine_data[i][2] == 0) {
      opt.value = s_engine_data[i][0];
      opt.innerHTML = s_engine_data[i][0];
      opt.title = s_engine_data[i][7];
      elEngine2.appendChild(opt);
    }
  }
  elEngine2.addEventListener("change", updateEngine2);

  el1st_Dry_to_Wet_mass_ratio_Range.addEventListener(
    "change",
    update1st_Dry_to_Wet_mass_ratio_Range
  );
  el2nd_Dry_to_Wet_mass_ratio_Range.addEventListener(
    "change",
    update2nd_Dry_to_Wet_mass_ratio_Range
  );
  el3rd_Dry_to_Wet_mass_ratio_Range.addEventListener(
    "change",
    update3rd_Dry_to_Wet_mass_ratio_Range
  );
  elUnused_propellant_of_1st_Stage_Range.addEventListener(
    "change",
    updateUnused_propellant_of_1st_Stage_Range
  );
  elUnused_propellant_of_2nd_Stage_Range.addEventListener(
    "change",
    updateUnused_propellant_of_2nd_Stage_Range
  );
  elUnused_propellant_of_Transfer_Orbit_Stage_Range.addEventListener(
    "change",
    updateUnused_propellant_of_Transfer_Orbit_Stage_Range
  );
  elFirst_stage_isp_sea_level_Range.addEventListener(
    "change",
    updateFirst_stage_isp_sea_level_Range
  );
  elFirst_stage_isp_vac_Range.addEventListener(
    "change",
    updateFirst_stage_isp_vac_Range
  );
  elSecond_stage_isp_vac_Range.addEventListener(
    "change",
    updateSecond_stage_isp_vac_Range
  );
  elTransfer_Orbit_Stage_isp_Range.addEventListener(
    "change",
    updateTransfer_Orbit_Stage_isp_Range
  );
  elSpecific_Impulse_Variation_Range.addEventListener(
    "change",
    updateSpecific_Impulse_Variation_Range
  );

  el1st_Dry_to_Wet_mass_ratio.addEventListener(
    "change",
    update1st_Dry_to_Wet_mass_ratio
  );
  el2nd_Dry_to_Wet_mass_ratio.addEventListener(
    "change",
    update2nd_Dry_to_Wet_mass_ratio
  );
  el3rd_Dry_to_Wet_mass_ratio.addEventListener(
    "change",
    update3rd_Dry_to_Wet_mass_ratio
  );
  elUnused_propellant_of_1st_Stage.addEventListener(
    "change",
    updateUnused_propellant_of_1st_Stage
  );
  elUnused_propellant_of_2nd_Stage.addEventListener(
    "change",
    updateUnused_propellant_of_2nd_Stage
  );
  elUnused_propellant_of_Transfer_Orbit_Stage.addEventListener(
    "change",
    updateUnused_propellant_of_Transfer_Orbit_Stage
  );
  elFirst_stage_isp_sea_level.addEventListener(
    "change",
    updateFirst_stage_isp_sea_level
  );
  elFirst_stage_isp_vac.addEventListener("change", updateFirst_stage_isp_vac);
  elSecond_stage_isp_vac.addEventListener("change", updateSecond_stage_isp_vac);
  elTransfer_Orbit_Stage_isp.addEventListener(
    "change",
    updateTransfer_Orbit_Stage_isp
  );
  elSpecific_Impulse_Variation.addEventListener(
    "change",
    updateSpecific_Impulse_Variation
  );

  elStarting_point_Altitude.addEventListener("change", Calculate);
  elAdditional_Speed.addEventListener("change", Calculate);
  elOrbit_Perigee.addEventListener("change", OrbitChange);
  elOrbit_Apogee.addEventListener("change", OrbitChange);
  elSpaceport_latitude.addEventListener("change", LatitudeChange);
  elOrbit_Inclination.addEventListener("change", InclinationChange);

  elFirst_stage_engine_thrust.addEventListener("change", updateWeight);
  elFirst_stage_engines_number.addEventListener("change", updateWeight);
  elSecond_stage_engine_thrust.addEventListener("change", updateWeight);
  elSecond_stage_engines_number.addEventListener("change", updateWeight);

  elThrust_to_weight_ratio.addEventListener("change", updateWeight);
  elRocket_Mass.addEventListener("change", Calculate_Rel);
  elMax_midsection_D.addEventListener("change", Calculate);
  elFairing_mass.addEventListener("change", Calculate);
  elFairing_jettison_velocity.addEventListener("change", Calculate);
  elJettisoned_battery_mass.addEventListener("change", Calculate);
  elAssumed_payload_mass.addEventListener("change", Calculate);
  el2nd_Stage_mass_ratio.addEventListener("change", Calculate_Rel);
  el3rd_Stage_mass_ratio.addEventListener("change", Calculate_Rel);
  el1st_Dry_to_Wet_mass_ratio.addEventListener("change", Calculate_Rel);
  el2nd_Dry_to_Wet_mass_ratio.addEventListener("change", Calculate_Rel);
  el3rd_Dry_to_Wet_mass_ratio.addEventListener("change", Calculate_Rel);
  elUnused_propellant_of_1st_Stage.addEventListener("change", Calculate);
  elUnused_propellant_of_2nd_Stage.addEventListener("change", Calculate);
  elUnused_propellant_of_Transfer_Orbit_Stage.addEventListener(
    "change",
    Calculate
  );
  elFirst_stage_isp_sea_level.addEventListener("change", Calculate);
  elFirst_stage_isp_vac.addEventListener("change", Calculate);
  elSecond_stage_isp_vac.addEventListener("change", Calculate);
  elTransfer_Orbit_Stage_isp.addEventListener("change", Calculate);
  elSpecific_Impulse_Variation.addEventListener("change", Calculate);

  elExtra_speed_for_flight_to_the_planets.addEventListener("change", Calculate);
  elFirst_stage_propellant_mass.addEventListener(
    "change",
    MassRecalculateAndCalc
  );
  elFirst_stage_dry_mass.addEventListener("change", MassRecalculateAndCalc);
  elSecond_stage_propellant_mass.addEventListener(
    "change",
    MassRecalculateAndCalc
  );
  elSecond_stage_dry_mass.addEventListener("change", MassRecalculateAndCalc);
  elTransfer_Orbit_stage_propellant_mass.addEventListener(
    "change",
    MassRecalculateAndCalc
  );
  elTransfer_Orbit_stage_dry_mass.addEventListener(
    "change",
    MassRecalculateAndCalc
  );

  elRocket.selectedIndex = 1;
  updateEngine1();
  updateEngine2();

  elExpand.setAttribute("isBool", 0);
  elExpand.addEventListener("click", ExpandChange);
  ExpandChange();
  f3stagesChange();
  elAir_Launch.checked = false;
  elAir_Launch.addEventListener("change", AirLaunchChangeAndCalc);

  elLimitation.checked = true;
  elLimitation.addEventListener("change", LimitationChange);

  elSet_averages.checked = false;
  elSet_averages.addEventListener("change", Set_averagesChange);

  elSet_AllMin.checked = false;
  elSet_AllMin.addEventListener("change", Set_AllMinChange);

  elSet_AllMax.checked = false;
  elSet_AllMax.addEventListener("change", Set_AllMaxChange);

  updateRocket();
  updateStartingPoint();
  updateOrbit();
  updateCycle();
  updateFuel();

  updateStages();
  Calculate();
}

function onPageUnload() {
  mywindow.close();
}
