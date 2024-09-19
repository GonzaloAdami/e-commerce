import React from "react";
import Card from "./card";

const Description = () => {

  const productos = [
    { color: '#B9101E', reputacion: 'Mala', reputacionIcon: 'https://res.cloudinary.com/dt6otshxt/image/upload/fl_preserve_transparency/v1726650569/down-arrows-download-svgrepo-com_ikt3qr.jpg?_s=public-apps', porcentaje: 25, atributo: 'Reputacion', icon: 'https://res.cloudinary.com/dt6otshxt/image/upload/fl_preserve_transparency/v1726600219/verified-ui-shield-svgrepo-com_2_hri0jr.jpg?_s=public-apps' },
    { color: '#ffa819', reputacion: 'Media', reputacionIcon: 'https://res.cloudinary.com/dt6otshxt/image/upload/fl_preserve_transparency/v1726650899/user-people-account-svgrepo-com_1_zctevy.jpg?_s=public-apps', porcentaje: 50, atributo: 'Atencion', icon: '' },
    { color: '#19ff77', reputacion: 'Buena', reputacionIcon: 'https://res.cloudinary.com/dt6otshxt/image/upload/fl_preserve_transparency/v1726650201/up-direction-upload-svgrepo-com_1_lfdxqb.jpg?_s=public-apps', porcentaje: 75, atributo: 'Velocidad de entrega', icon: 'https://asset.cloudinary.com/dt6otshxt/19807a3983ada126be1c1e79d481724d' }
  ];

  return (
    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 max-w-1/2 w-1/2">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Basic Tee 6-Pack</h1>
      <div>
        <Card productos={productos} />

        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">Applicant Information</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
        </div>

        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Application for</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">$120,000</dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Description;
