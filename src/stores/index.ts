import { atom } from "jotai";
import { PackageAPIUserResponse } from "~/types/package-api";
import type { PackageData } from "~/types/sql";
import { atomWithLocalStorage } from "~/utils/jotai";

export const initAtom = atom(false);

export const CONFIG_ATOM_INITIAL_VALUE = {
  db: {
    packages: [],
    selectedId: null,
  },
  goToOnboardingAccess: false,
};

export const configAtom = atomWithLocalStorage<{
  db: {
    packages: ({
      id: string;
      packageLink: string;
      UPNKey: string;
      dateAdded: string;
      backendURL: string;
    } & PackageData)[];
    selectedId: null | string;
  };
  goToOnboardingAccess: boolean;
}>("config", CONFIG_ATOM_INITIAL_VALUE);

export const selectedPackageAtom = atom((get) => {
  const {
    db: { packages, selectedId },
  } = get(configAtom);
  return packages.find(({ id }) => id === selectedId)!;
});

export const unselectedPackagesAtom = atom((get) => {
  const {
    db: { packages, selectedId },
  } = get(configAtom);
  return packages.filter(({ id }) => id !== selectedId);
});

export const USERS_CACHE_ATOM_INITIAL_VALUE = [];

export const usersCacheAtom = atomWithLocalStorage<PackageAPIUserResponse[]>(
  "users-cache",
  []
);
