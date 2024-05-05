import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import axios from "axios";
const RegistrationForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formData = {

      prosperName: data.prosperName,
      age: data.age,
      address: {
        businessAddress: {
          subCity: data.subCity,
          kebele: data.kebele,
          houseNumber: data.houseNumber,
          email: data.email,
          faxNumber: data.faxNumber,
          postaBox: data.postaBox,
          teleNum: data.teleNum
        },
        resedentialAddress: {
          subCity: data.subCity,
          kebele: data.kebele,
          houseNumber: data.houseNumber,
          email: data.email,
          postaBox: data.postaBox,
          teleNum: data.teleNum
        }
      },
      occupation: data.occupation,
      periodOfInsuranceFrom: data.periodOfInsuranceFrom,
      periodOfInsuranceTo: data.periodOfInsuranceTo,
      // Number 5 is confusing 
      coverRequired: data.coverRequired,
      coverRequiredExtraFitting: {
        status: data.status,
        values: {
          forRadioAndPlayers: data.forRadioAndPlayers,
          forCommunication: data.forCommunication,
          forBullCar: data.forBullCar
        }
      },
      vicheleStatus: {
        isInGoodStateOfRepair: data.isInGoodStateOfRepair,
        whereDoesItLeftOvernight: {
          openButInYourPremises: data.openButInYourPremises,
          elseWhere: data.elseWhere
        }
      },
      areYouOwner:{
        ownerStatus: data.ownerStatus,
        ownerName: data.ownerName
      },
      isUnderHirePurchase:{
        hirePurchaseStatus: data.hirePurchaseStatus,
        nameOfCompany: data.nameOfCompany,
        addressOfCompany: data.addressOfCompany
      },
      willVechileUsedForPrivate:{
        privateUsageStatus: data.privateUsageStatus,
        itsUsage: data.itsUsage
      },
      voluntaryExcessForCover: data.voluntaryExcessForCover,
      driversAndDriving:{
        howLong1: data.howLong1,
        howLong2: data.howLong2,
        regularityForPastYear: data.regularityForPastYear,
        driverLicense:{
          place: data.place,
          date: data.date
        }
      },
      disableityStatus: data.disableityStatus,
      offenceWithMotorVechiles: {
        offenceStatus: data.offenceStatus,
        offence: data.offence
      },
      insuredMotorVechile:{
        insuranaceStatus: data.insuranaceStatus,
        nameOfInsurance: data.nameOfInsurance,

      },
      insuranceCompanyEver:{
        declinedYourProposal: data.declinedYourProposal,
        refusedToReniew: data.refusedToReniew,
        cancelledYourPolicy: data.cancelledYourPolicy,
        requirdIncrease: data.requirdIncrease,
        imposedExcess: data.imposedExcess,
        imposedSpecialCondition: data.imposedSpecialCondition
      },

      accidentOverThreeYears:{
        accidentDate: data.accidentDate,
        damagesOfVechile: data.damagesOfVechile,
        claimByThirdParty:{
          personalInjury: data.personalInjury,
          propertyDamage: data.propertyDamage
        }
      },
      entitledToNoClaimBonus:{
        claimStatus: data.claimStatus,
        produceCertficate: data.produceCertficate,
      },
      personalInsuranceBenefit:{
        wishPersonalBenefit: data.wishPersonalBenefit,
        heldPersonalInsurance: {
          insuranceStatus: data.insuranaceStatus,
          nameOfInsuranceHeld: data.nameOfInsuranceHeld
        }
      },
      wishToInsurePaidDriver: data.wishToInsurePaidDriver,
      isPassengersToBeInsuredAgainstPassengersLiablity: data.isPassengersToBeInsuredAgainstPassengersLiablity,
      dateOfIssue: data.dateOfIssue,
      branch: data.branch,
      underWriter: data.underWriter,
      
    };

    // console.log(Data);
    const response = await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(formData),
    });
    const Data = await response.json();
    if (response.status === 400) {
      console.log(data.error);

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
                  <Input
                    {...register("firstName")}
                    variant="st"
                    label="First Name"
                    placeholder="first name"
                  />
                </div>
                <div className="w-96">
                  <Input
                    {...register("lastName")}
                    variant="outlined"
                    label="Last Name"
                    placeholder="last name"
                  />
                </div>
                <div className="w-96">
                  <Input
                    {...register("email")}
                    variant="outlined"
                    label="email"
                    placeholder="email"
                  />
                </div>
                <div className="w-96">
                  <Input
                    {...register("password")}
                    variant="outlined"
                    label="Password"
                    placeholder="password"
                  />
                </div>
                <div className="w-96">
                  <Input
                    {...register("phoneNumber")}
                    variant="outlined"
                    label="Phone Number"
                    placeholder="phone number"
                  />
                </div>
                <div className="w-96">
                  <Input
                    {...register("role")}
                    variant="outlined"
                    label="role"
                    placeholder="role"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-[32px] font-normal text-center pb-10">
                Address
              </p>
              <div className="flex gap-9 flex-wrap">
                <div className="w-96">
                  <Input
                    {...register("subCity")}
                    variant="st"
                    label="Sub-City"
                    placeholder="sub-city"
                  />
                </div>
                <div className="w-96">
                  <Input
                    {...register("kebele")}
                    variant="st"
                    label="Kebele(Woreda)"
                    placeholder="Kebele(Woreda)"
                  />
                </div>
                <div className="w-96">
                  <Input
                    {...register("houseNumber")}
                    variant="st"
                    label="House-Number"
                    placeholder="House-Number"
                  />
                </div>
                <div className="w-96">
                  <Input
                    {...register("postalCode")}
                    variant="st"
                    label="Postal Code"
                    placeholder="postal code"
                  />
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
