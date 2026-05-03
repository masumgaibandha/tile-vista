"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BiEdit, BiUser, BiCheck } from "react-icons/bi";
import { Modal, Button } from "@heroui/react";

export function UpdateUserModal() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    setLoading(true);
    try {
      await authClient.updateUser({ name, image });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        router.refresh();
        router.push("/profile");
      }, 1500);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal>
      {/* Trigger */}
      <Button
        variant="secondary"
        className="flex items-center gap-2 border border-stone-200 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-700 text-stone-600 text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200"
      >
        <BiEdit className="text-base" />
        Update Profile
      </Button>

      <Modal.Backdrop className="bg-stone-900/40 backdrop-blur-sm">
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md w-full">
            <Modal.CloseTrigger className="text-stone-400 hover:text-stone-700 transition-colors" />

            {/* Header */}
            <Modal.Header className="px-6 pt-6 pb-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center">
                  <BiUser className="text-amber-600 text-lg" />
                </div>
                <div>
                  <Modal.Heading className="text-stone-900 font-semibold text-lg">
                    Update Profile
                  </Modal.Heading>
                  <p className="text-stone-400 text-xs mt-0.5">
                    Changes will reflect across your account
                  </p>
                </div>
              </div>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="px-6 py-6">
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                {/* Name field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-stone-700 text-sm font-medium">
                    Full Name
                  </label>
                  <div className="relative">
                    <BiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-base pointer-events-none" />
                    <input
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      className="w-full pl-9 pr-4 py-2.5 text-sm text-stone-800 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 placeholder:text-stone-300 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Image URL field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-stone-700 text-sm font-medium">
                    Profile Image URL
                  </label>
                  <div className="relative">
                    <svg
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 w-4 h-4 pointer-events-none"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={
                          "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                        }
                      />
                    </svg>
                    <input
                      name="image"
                      type="url"
                      placeholder="https://example.com/photo.jpg"
                      className="w-full pl-9 pr-4 py-2.5 text-sm text-stone-800 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 placeholder:text-stone-300 transition-all duration-200"
                    />
                  </div>
                  <p className="text-stone-400 text-[11px]">
                    Paste a direct link to your profile photo
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-stone-100 my-1" />

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    slot="close"
                    variant="secondary"
                    className="flex-1 py-2.5 text-sm font-medium text-stone-500 border border-stone-200 rounded-xl hover:bg-stone-50 transition-all duration-200"
                  >
                    Cancel
                  </Button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 bg-amber-600 hover:bg-amber-700 active:bg-amber-800 text-white disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Saving...
                      </>
                    ) : success ? (
                      <>
                        <BiCheck className="text-base" />
                        Saved!
                      </>
                    ) : (
                      "Save Changes"
                    )}
                  </button>
                </div>
              </form>
            </Modal.Body>

            <Modal.Footer />
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
