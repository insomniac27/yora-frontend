import React from 'react';

const DeleteAccount = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        To delete an application from your device, follow the steps corresponding to your operating system:
      </h1>

      {/* Android Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-700">For Android Devices:</h2>
        <div className="mb-4">
          <h3 className="font-medium text-gray-600">1. From the Home Screen or App Drawer:</h3>
          <ul className="list-disc list-inside ml-4 text-gray-600">
            <li>Locate the app you wish to remove.</li>
            <li>Touch and hold the app icon until a menu appears.</li>
            <li>Select “Uninstall” or drag the icon to the “Uninstall” option.</li>
            <li>Confirm the uninstallation when prompted.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-medium text-gray-600">2. Through Settings:</h3>
          <ul className="list-disc list-inside ml-4 text-gray-600">
            <li>Open the “Settings” app.</li>
            <li>Navigate to “Apps” or “App Management.”</li>
            <li>Scroll through the list to find the desired app and tap on it.</li>
            <li>Tap “Uninstall” and confirm when prompted.</li>
          </ul>
        </div>
        <p className="text-sm text-gray-500 italic">
          Note: Some pre-installed apps cannot be uninstalled but can be disabled to prevent them from running.
        </p>
      </div>

      {/* iOS Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-gray-700">For iOS Devices (iPhone or iPad):</h2>
        <div className="mb-4">
          <h3 className="font-medium text-gray-600">1. From the Home Screen:</h3>
          <ul className="list-disc list-inside ml-4 text-gray-600">
            <li>Locate the app you want to delete.</li>
            <li>Touch and hold the app icon until it jiggles.</li>
            <li>Tap the minus (-) sign or “Remove App” option.</li>
            <li>Choose “Delete App” and confirm the deletion.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-medium text-gray-600">2. From the App Library:</h3>
          <ul className="list-disc list-inside ml-4 text-gray-600">
            <li>Swipe left past all your Home Screen pages to access the App Library.</li>
            <li>Find the app you wish to delete.</li>
            <li>Touch and hold the app icon.</li>
            <li>Select “Delete App” and confirm when prompted.</li>
          </ul>
        </div>
        <p className="text-sm text-gray-500 italic">
          Note: Deleting an app also removes its data. Some built-in Apple apps cannot be deleted but can be removed from the Home Screen.
        </p>
      </div>

      {/* General Notes */}
      <div className="text-gray-600">
        <p className="mb-2">
          For both platforms, if you’ve purchased an app, you can reinstall it without repurchasing. Additionally, consider managing your device’s storage by removing unused apps and backing up important data.
        </p>
        <p>
          Regularly updating your device’s software and apps ensures optimal performance and security.
        </p>
      </div>
    </div>
  );
};

export default DeleteAccount;