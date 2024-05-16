import { useForm, Controller } from "react-hook-form";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useEffect } from "react";
import { Radio } from "@material-tailwind/react";
const RegistrationForm = () => {
  const { control, handleSubmit } = useForm();
  useEffect(() => {
    document.title = "Register | Insura";
  });
  const onSubmit = async (data) => {
    const formData = {
      prosperName: data.prosperName,
      age: data.age,
      password: data.password,
      email: data.email,
      address: {
        businessAddress: {
          subCity: data.subCity,
          kebele: data.kebele,
          houseNumber: data.houseNumber,
          email: data.email,
          faxNumber: data.faxNumber,
          postaBox: data.postaBox,
          teleNum: data.teleNum,
        },
        resedentialAddress: {
          subCity: data.subCity,
          kebele: data.kebele,
          houseNumber: data.houseNumber,
          email: data.email,
          postaBox: data.postaBox,
          teleNum: data.teleNum,
        },
      },
      occupation: data.occupation,
      periodOfInsurance: data.periodOfInsurance,
      coverRequired: data.coverRequired,
      driverCovered: data.driverCovered,
      coverRequiredExtraFitting: {
        status: data.status,
        values: {
          forRadioAndPlayers: data.forRadioAndPlayers,
          forCommunication: data.forCommunication,
          forBullCar: data.forBullCar,
        },
      },
      vicheleStatus: {
        isInGoodStateOfRepair: data.isInGoodStateOfRepair,
        whereDoesItLeftOvernight: data.whereDoesItLeftOvernight,
      },
      areYouOwner: {
        ownerStatus: data.ownerStatus,
        ownerName: data.ownerName,
      },
      isUnderHirePurchase: {
        hirePurchaseStatus: data.hirePurchaseStatus,
        nameOfCompany: data.nameOfCompany,
        addressOfCompany: data.addressOfCompany,
      },
      willVechileUsedForPrivate: {
        privateUsageStatus: data.privateUsageStatus,
        itsUsage: data.itsUsage,
      },
      voluntaryExcessForCover: data.voluntaryExcessForCover,
      driversAndDriving: {
        howLong1: data.howLong1,
        howLong2: data.howLong2,
        regularityForPastYear: data.regularityForPastYear,
        driverLicense: {
          place: data.place,
          date: data.date,
        },
      },
      disableityStatus: data.disableityStatus,
      offenceWithMotorVechiles: {
        offenceStatus: data.offenceStatus,
        offence: data.offence,
      },
      insuredMotorVechile: {
        insuranaceStatus: data.insuranaceStatus,
        nameOfInsurance: data.nameOfInsurance,
      },
      insuranceCompanyEver: {
        declinedYourProposal: data.declinedYourProposal,
        refusedToReniew: data.refusedToReniew,
        cancelledYourPolicy: data.cancelledYourPolicy,
        requirdIncrease: data.requirdIncrease,
        imposedExcess: data.imposedExcess,
        imposedSpecialCondition: data.imposedSpecialCondition,
      },
      accidentOverThreeYears: {
        accidentDate: data.accidentDate,
        damagesOfVechile: data.damagesOfVechile,
        claimByThirdParty: {
          personalInjury: data.personalInjury,
          propertyDamage: data.propertyDamage,
        },
      },
      entitledToNoClaimBonus: {
        claimStatus: data.claimStatus,
        produceCertficate: data.produceCertficate,
      },
      personalInsuranceBenefit: {
        wishPersonalBenefit: data.wishPersonalBenefit,
        heldPersonalInsurance: {
          insuranceStatus: data.insuranaceStatus,
          nameOfInsuranceHeld: data.nameOfInsuranceHeld,
        },
      },
      wishToInsurePaidDriver: data.wishToInsurePaidDriver,
      isPassengersToBeInsuredAgainstPassengersLiablity:
        data.isPassengersToBeInsuredAgainstPassengersLiablity,
      dateOfIssue: data.dateOfIssue,
      branch: data.branch,
      underWriter: data.underWriter,
    };

    console.log(data);
    const response = await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    });
    const responseData = await response.json();
    if (response.status === 400) {
      console.log(responseData.error);
      return;
    } else {
      console.log("User Created");
    }
  };

  return (
    <div>
      <p className="text-[42px] font-normal leading-6 text-center pt-20">
        Register Here !!
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-5 px-48">
          <div className="col-span-3 flex flex-col gap-6">
            <div>
              <p className="text-[32px] font-[300] text-center pt-32 pb-16">
                Personal Details
              </p>
              <div className="flex flex-wrap gap-9">
                <div className="w-96">
                  <Controller
                    control={control}
                    name="fullName"
                    render={({ field }) => (
                      <Input
                        {...field}
                        label="Full Name"
                        placeholder="Full Name"
                      />
                    )}
                  />
                </div>
                <div className="">
                  <Controller
                    control={control}
                    name="age"
                    render={({ field }) => (
                      <Input
                        {...field}
                        variant="outlined"
                        label="Age"
                        placeholder="Age"
                      />
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-[32px] font-normal text-center pb-10">
                Business Address
              </p>
              <div className="flex gap-9 flex-wrap">
                <div className="w-96">
                  <Controller
                    control={control}
                    name="address.businessAddress.subCity"
                    render={({ field }) => (
                      <Input
                        {...field}
                        variant="st"
                        label="Sub-City"
                        placeholder="Sub-City"
                      />
                    )}
                  />
                </div>
                <div className="w-96">
                  <Controller
                    control={control}
                    name="address.businessAddress.kebele"
                    render={({ field }) => (
                      <Input
                        {...field}
                        variant="st"
                        label="Kebele(Woreda)"
                        placeholder="Kebele(Woreda)"
                      />
                    )}
                  />
                </div>
                <div className="w-96">
                  <Controller
                    control={control}
                    name="address.businessAddress.houseNumber"
                    render={({ field }) => (
                      <Input
                        {...field}
                        variant="st"
                        label="House Number"
                        placeholder="House Number"
                      />
                    )}
                  />
                </div>

                <div className="w-96">
                  <Controller
                    control={control}
                    name="address.businessAddress.email"
                    render={({ field }) => (
                      <Input
                        {...field}
                        variant="st"
                        label="Email"
                        placeholder="Email"
                      />
                    )}
                  />
                </div>
                <div className="w-96">
                  <Controller
                    control={control}
                    name="address.businessAddress.faxNumber"
                    render={({ field }) => (
                      <Input
                        {...field}
                        variant="st"
                        label="Fax Number"
                        placeholder="Fax Number"
                      />
                    )}
                  />
                </div>
                <div className="w-96">
                  <Controller
                    control={control}
                    name="address.businessAddress.postaBox"
                    render={({ field }) => (
                      <Input
                        {...field}
                        variant="st"
                        label="Post Box"
                        placeholder="Post Box"
                      />
                    )}
                  />
                </div>

                <div className="w-96">
                  <Controller
                    control={control}
                    name="address.businessAddress.teleNum"
                    render={({ field }) => (
                      <Input
                        {...field}
                        variant="st"
                        label="Tel. No"
                        placeholder="Tel. No"
                      />
                    )}
                  />
                </div>

                <div className="w-96">
                  <Controller
                    control={control}
                    name="address.businessAddress.email"
                    render={({ field }) => (
                      <Input
                        {...field}
                        variant="st"
                        label="Email"
                        placeholder="Email"
                      />
                    )}
                  />
                </div>
              </div>
              <hr />
            </div>
            <div className="">
              <p className="text-[32px] font-normal text-center pb-10">
                Resedential Address
              </p>
              <div className="flex gap-9 flex-wrap">
                <div className="w-96">
                  <Controller
                    control={control}
                    name="address.resedentialAddress.subCity"
                    render={({ field }) => (
                      <Input
                        {...field}
                        variant="st"
                        label="Sub-City"
                        placeholder="Sub-City"
                      />
                    )}
                  />
                </div>
                {/* <div className="w-96">
                  <Controller
                    control={control}
                    name="email"
                    render={({ field }) => (
                      <Input
                        {...field}
                        variant="st"
                        label="Email"
                        placeholder="Email"
                      />
                    )}
                  />
                </div> */}
                {/* <div className="w-96">
                  <Controller
                    control={control}
                    name="password"
                    render={({ field }) => (
                      <Input
                        {...field}
                        variant="st"
                        label="Password"
                        placeholder="Password"
                      />
                    )}
                  />
                </div> */}
                <div className="w-96">
                  <Controller
                    control={control}
                    name="address.resedentialAddress.kebele"
                    render={({ field }) => (
                      <Input
                        {...field}
                        variant="st"
                        label="Kebele(Woreda)"
                        placeholder="Kebele(Woreda)"
                      />
                    )}
                  />
                </div>
                <div className="w-96">
                  <Controller
                    control={control}
                    name="address.resedentialAddress.houseNumber"
                    render={({ field }) => (
                      <Input
                        {...field}
                        variant="st"
                        label="House Number"
                        placeholder="House Number"
                      />
                    )}
                  />
                </div>

                <div className="w-96">
                  <Controller
                    control={control}
                    name="address.resedentialAddress.email"
                    render={({ field }) => (
                      <Input
                        {...field}
                        variant="st"
                        label="Email"
                        placeholder="Email"
                      />
                    )}
                  />
                </div>

                <div className="w-96">
                  <Controller
                    control={control}
                    name="address.resedentialAddress.postaBox"
                    render={({ field }) => (
                      <Input
                        {...field}
                        variant="st"
                        label="Post Box"
                        placeholder="Post Box"
                      />
                    )}
                  />
                </div>

                <div className="w-96">
                  <Controller
                    control={control}
                    name="address.resedentialAddress.teleNum"
                    render={({ field }) => (
                      <Input
                        {...field}
                        variant="st"
                        label="Tel. No"
                        placeholder="Tel. No"
                      />
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="">
              
              <div className="flex gap-9 flex-wrap">
                <div className="w-96">
                  <Controller
                    control={control}
                    name="occupation"
                    render={({ field }) => (
                      <Input
                        {...field}
                        variant="st"
                        label="Occupation"
                        placeholder="Occupation"
                      />
                    )}
                  />
                </div>
                <div className="w-96">
                  <Controller
                    control={control}
                    name="periodOfInsurance"
                    render={({ field }) => (
                      <Input
                        {...field}
                        variant="st"
                        label="Kebele(Woreda)"
                        placeholder="Kebele(Woreda)"
                      />
                    )}
                  />
                </div>
                <div className="">
                  <p className="text-[32px] font-normal text-center pb-10">
                    Cover Required
                  </p>
                  <div className="flex gap-9 flex-wrap">
                    <div className="w-96">
                      <Controller
                        control={control}
                        name="coverRequired"
                        render={({ field }) => (
                          <>
                            <Radio
                              {...field}
                              label="Comprehensive"
                              value="Comprehensive"
                              ripple={true}
                            />
                            <Radio
                              {...field}
                              label="Third Party Only"
                              value="Third Party Only"
                              ripple={true}
                            />
                            <Radio
                              {...field}
                              label="Third Party Fire and Theft"
                              value="Third Party Fire and Theft"
                              ripple={true}
                            />
                            <Radio
                              {...field}
                              label="Compulsory Motor Insurance"
                              value="Compulsory Motor Insurance"
                              ripple={true}
                            />
                          </>
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="">
                  <p className="text-[32px] font-normal text-center pb-10">
                  Driver Covered
                  </p>
                  <div className="flex gap-9 flex-wrap"></div>
                 
                  <div className="w-96">
                    <Controller
                      control={control}
                      name="driverCovered"
                      render={({ field }) => (
                        <>
                          <Radio
                            {...field}
                            label="Insured Only"
                            value="Insured Only"
                            ripple={true}
                          />
                          <Radio
                            {...field}
                            label="Third Party Only"
                            value="Third Party Only"
                            ripple={true}
                          />
                          <Radio
                            {...field}
                            label="Third Party Fire and Theft"
                            value="Third Party Fire and Theft"
                            ripple={true}
                          />
                          <Radio
                            {...field}
                            label="Compulsory Motor Insurance"
                            value="Compulsory Motor Insurance"
                            ripple={true}
                          />
                        </>
                      )}
                    />
                  </div>
                </div>

                <div>
                  <p className="text-[32px] font-normal text-center pb-10">
                    Cover requested
                  </p>
                  <div className="w-96">
                    <Controller
                      control={control}
                      name="coverRequiredExtraFitting.status"
                      render={({ field }) => (
                        <>
                          <Radio
                            {...field}
                            label="Yes"
                            value="Yes"
                            ripple={true}
                          />
                          <Radio
                            {...field}
                            label="No"
                            value="No"
                            ripple={true}
                          />
                          {field.value === "Yes" && (
                            <div className="flex gap-9 flex-wrap">
                              Cover requested for extra fitting
                              <div className="w-96">
                                <Controller
                                  control={control}
                                  name="coverRequiredExtraFitting.values.forRadioAndPlayers"
                                  render={({ field }) => (
                                    <>
                                      <Input
                                        {...field}
                                        variant="st"
                                        label="For radio and Players"
                                        placeholder="For radio and Players"
                                      />
                                    </>
                                  )}
                                />
                              </div>
                              <div className="w-96">
                                <Controller
                                  control={control}
                                  name="coverRequiredExtraFitting.values.forCommunication"
                                  render={({ field }) => (
                                    <>
                                      <Input
                                        {...field}
                                        variant="st"
                                        label="For radio and Players"
                                        placeholder="For radio and Players"
                                      />
                                    </>
                                  )}
                                />
                              </div>
                              <div className="w-96">
                                <Controller
                                  control={control}
                                  name="coverRequiredExtraFitting.values.forBullCar"
                                  render={({ field }) => (
                                    <>
                                      <Input
                                        {...field}
                                        variant="st"
                                        label="For radio and Players"
                                        placeholder="For radio and Players"
                                      />
                                    </>
                                  )}
                                />
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[32px] font-normal text-center pb-10">
                    Is vechile in good state of repair?
                  </p>
                  <div className="w-96">
                    <Controller
                      control={control}
                      name="vicheleStatus.isInGoodStateOfRepair"
                      render={({ field }) => (
                        <>
                          <Radio
                            {...field}
                            label="Yes"
                            value="Yes"
                            ripple={true}
                          />
                          <Radio
                            {...field}
                            label="No"
                            value="No"
                            ripple={true}
                          />
                        </>
                      )}
                    />
                  </div>
                  Where does it left over night
                  <div className="w-96">
                    <Controller
                      control={control}
                      name="vicheleStatus.whereDoesItLeftOvernight"
                      render={({ field }) => (
                        <>
                          <Radio
                            {...field}
                            label="In garage"
                            value="In garage"
                            ripple={true}
                          />
                          <Radio
                            {...field}
                            label="Open but in your Premises"
                            value="Open but in your Premises"
                            ripple={true}
                          />

                          <Radio
                            {...field}
                            label="Elsewhere"
                            value="Elsewhere"
                            ripple={true}
                          />
                        </>
                      )}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[32px] font-normal text-center pb-10">
                    Are you owner if this vechile
                  </p>
                  <div className="w-96">
                    <Controller
                      control={control}
                      name="areYouOwner.ownerStatus"
                      render={({ field }) => (
                        <>
                          <Radio
                            {...field}
                            label="Yes"
                            value="Yes"
                            ripple={true}
                          />
                          <Radio
                            {...field}
                            label="No"
                            value="No"
                            ripple={true}
                          />
                          {field.value === "No" && (
                            <div className="flex gap-9 flex-wrap">
                              <div className="w-96">
                                <Controller
                                  control={control}
                                  name="areYouOwner.ownerName"
                                  render={({ field }) => (
                                    <>
                                      <Input
                                        {...field}
                                        variant="st"
                                        label="Owners Name"
                                        placeholder="Owners Name"
                                      />
                                    </>
                                  )}
                                />
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    />
                  </div>
                  If Vechiless are aquired under hire purchase agreement
                  <div className="w-96">
                    <Controller
                      control={control}
                      name="isUnderHirePurchase.hirePurchaseStatus"
                      render={({ field }) => (
                        <>
                          <Radio
                            {...field}
                            label="Yes"
                            value="Yes"
                            ripple={true}
                          />

                          <Radio
                            {...field}
                            label="No"
                            value="No"
                            ripple={true}
                          />
                          {field.value === "Yes" && (
                            <>
                              <div className="w-96">
                                <Controller
                                  control={control}
                                  name="isUnderHirePurchase.nameOfCompany"
                                  render={({ field }) => (
                                    <>
                                      <Input
                                        {...field}
                                        variant="st"
                                        label="Company Name"
                                        placeholder="Company Name"
                                      />
                                    </>
                                  )}
                                />
                              </div>
                              <div className="w-96">
                                <Controller
                                  control={control}
                                  name="isUnderHirePurchase.addressOfCompany"
                                  render={({ field }) => (
                                    <>
                                      <Input
                                        {...field}
                                        variant="st"
                                        label="Company Address"
                                        placeholder="Company Address"
                                      />
                                    </>
                                  )}
                                />
                              </div>
                            </>
                          )}
                        </>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Button color="indigo" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
