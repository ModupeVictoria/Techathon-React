import React from "react";
import { FaAmbulance, FaClinicMedical, FaHospital, FaHotel, FaTooth, FaHandHoldingMedical } from "react-icons/fa";

function Services() {
  return (
    <div className="bg-[#eaf4fe] pt-12 pb-12">
      <div className="container items-center mx-auto px-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-3 text-[#001d46]">
            What we Offer
          </h1>
          <p>
            We offer a wide range of services which includes the following below
          </p>
        </div>

        <div className="flex flex-col items-center mt-10 mb-5 md:flex-row md:justify-between">
          <div className="block p-6 max-w-sm bg-white rounded-lg mb-5 border border-gray-200 shadow-md md:mr-5 hover:bg-gray-100">
            <span className="bg-blue-100 text-[#6692d7] text-lg font-semibold inline-flex items-center p-2.5 rounded-full ">
              <FaHospital />
            </span>
            <h5 className="mb-2 mt-8 text-xl font-semibold  text-[#001d46]">
              Radiology Assistant
            </h5>
            <p className="font-normal text-[#777] mt-3">
              Radiology is the medical discipline that uses radiology to diagnose patients.
            </p>
          </div>

          <div className="block p-6 max-w-sm bg-white rounded-lg mb-5 border border-gray-200 shadow-md md:mr-5 hover:bg-gray-100">
          <span className="bg-blue-100 text-[#6692d7] text-lg font-semibold inline-flex items-center p-2.5 rounded-full ">
              <FaAmbulance />
            </span>
            <h5 className="mb-2 mt-8 text-xl font-semibold  text-[#001d46]">
              Ambulance Service
            </h5>
            <p className="font-normal text-[#777] mt-3">
              We are just a phone call away we have standby ambulances to help solve emergenceis.
            </p>
          </div>

          <div className="block p-6 max-w-sm bg-white rounded-lg mb-5 border border-gray-200 shadow-md hover:bg-gray-100 ">
          <span className="bg-blue-100 text-[#6692d7] text-lg font-semibold inline-flex items-center p-2.5 rounded-full ">
              <FaTooth />
            </span>
            <h5 className="mb-2 mt-8 text-xl font-semibold  text-[#001d46]">
              Dental Care Service
            </h5>
            <p className="font-normal text-[#777] mt-3">
              All animals should have healthy teeths, so we ensure to provide care for all animals.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-5 mb-5 md:flex-row md:justify-between">
          <div className="block p-6 max-w-sm bg-white rounded-lg mb-5 border border-gray-200 shadow-md md:mr-5 hover:bg-gray-100">
          <span className="bg-blue-100 text-[#6692d7] text-lg font-semibold inline-flex items-center p-2.5 rounded-full ">
              <FaClinicMedical />
            </span>
            <h5 className="mb-2 mt-8 text-xl font-semibold  text-[#001d46]">
              Surgical Operation
            </h5>
            <p className="font-normal text-[#777] mt-3">
              We provide surgical operations to all animals that are in need of it 24/7
            </p>
          </div>

          <div className="block p-6 max-w-sm bg-white rounded-lg mb-5 border border-gray-200 shadow-md md:mr-5 hover:bg-gray-100">
          <span className="bg-blue-100 text-[#6692d7] text-lg font-semibold inline-flex items-center p-2.5 rounded-full ">
              <FaHandHoldingMedical />
            </span>
            <h5 className="mb-2 mt-8 text-xl font-semibold  text-[#001d46]">
              Partution Service
            </h5>
            <p className="font-normal text-[#777] mt-3">
              Our maternity service provides services with our private and hygenic delivery.
            </p>
          </div>

          <div className="block p-6 max-w-sm bg-white rounded-lg mb-5 border border-gray-200 shadow-md hover:bg-gray-100">
          <span className="bg-blue-100 text-[#6692d7] text-lg font-semibold inline-flex items-center p-2.5 rounded-full ">
              <FaHotel />
            </span>
            <h5 className="mb-2 mt-8 text-xl font-semibold  text-[#001d46]">
              Pet Hotel Service
            </h5>
            <p className="font-normal text-[#777] mt-3">
              Our hotel service works for you when you're on vacation or at work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
