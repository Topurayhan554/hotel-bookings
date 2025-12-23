import React, { useContext, useState } from "react";
import { Camera, Mail, User, Lock, Trash2, AlertCircle } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

export default function ManageAccount() {
  const { updateProfileFunc, user } = useContext(AuthContext);

  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    email: user?.email || "",
    photoURL: user?.photoURL || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  if (!user) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, photoURL: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
    updateProfileFunc(formData.displayName, formData.photoURL)
      .then(() => {
        toast.success("Profile updated successfully!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Reset form data to original user data
    setFormData({
      displayName: user?.displayName || "",
      email: user?.email || "",
      photoURL: user?.photoURL || "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleChangePassword = () => {
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    // Change password logic here (Firebase reauthentication দরকার হবে)
    toast.success("Password changed successfully!");
    setFormData({
      ...formData,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      // Delete account logic here
      toast.warning("Account deleted");
    }
  };

  return (
    <div className="min-h-screen mt-15 bg-gradient-to-br from-amber-50 to-orange-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-t-2xl shadow-lg p-6 border-b">
          <h1 className="text-3xl font-bold text-gray-800">Manage Account</h1>
          <p className="text-gray-600 mt-2">
            Update your profile information and account settings
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white shadow-lg">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === "profile"
                  ? "text-amber-600 border-b-2 border-amber-600 bg-amber-50"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              <User className="inline-block w-5 h-5 mr-2" />
              Profile Information
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === "security"
                  ? "text-amber-600 border-b-2 border-amber-600 bg-amber-50"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              <Lock className="inline-block w-5 h-5 mr-2" />
              Security
            </button>
          </div>

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="p-8">
              {/* Profile Picture */}
              <div className="flex flex-col items-center mb-8">
                <div className="relative">
                  <img
                    src={
                      formData?.photoURL || "https://via.placeholder.com/200"
                    }
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-amber-200"
                  />
                  {isEditing && (
                    <label
                      htmlFor="photo-upload"
                      className="absolute bottom-0 right-0 bg-amber-600 rounded-full p-2 cursor-pointer hover:bg-amber-700 transition-colors shadow-lg"
                    >
                      <Camera className="w-5 h-5 text-white" />
                      <input
                        id="photo-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
                {isEditing && (
                  <p className="text-sm text-gray-500 mt-3">
                    Click the camera icon to change your photo
                  </p>
                )}
              </div>

              {/* Profile Form */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="displayName"
                    value={formData?.displayName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData?.email}
                      disabled
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 text-gray-700 rounded-lg bg-gray-100 cursor-not-allowed"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Email cannot be changed
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex-1 bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-all shadow-md hover:shadow-lg"
                    >
                      Edit Profile
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={handleSaveProfile}
                        className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
                      >
                        Save Changes
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="flex-1 bg-gray-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600 transition-all shadow-md hover:shadow-lg"
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <div className="p-8">
              {/* Change Password Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Change Password
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleInputChange}
                      placeholder="Enter current password"
                      className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleInputChange}
                      placeholder="Enter new password"
                      className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm new password"
                      className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>

                  <button
                    onClick={handleChangePassword}
                    className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition-all shadow-md hover:shadow-lg"
                  >
                    Update Password
                  </button>
                </div>
              </div>

              {/* Delete Account Section */}
              <div className="border-t pt-8">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <AlertCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-red-800 mb-2">
                        Danger Zone
                      </h3>
                      <p className="text-sm text-red-700 mb-4">
                        Once you delete your account, there is no going back.
                        All your data, including your booklist and reading
                        history, will be permanently deleted.
                      </p>
                      <button
                        onClick={handleDeleteAccount}
                        className="flex items-center gap-2 bg-red-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-red-700 transition-all shadow-md hover:shadow-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-b-2xl shadow-lg p-4 text-center text-sm text-gray-500">
          Need help? Contact our support team at support@bookstore.com
        </div>
      </div>
    </div>
  );
}
