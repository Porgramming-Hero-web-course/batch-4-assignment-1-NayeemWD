{
  //

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  const updateProfile = (
    profile: Profile,
    update: Partial<Profile>
  ): Profile => {
    return { ...profile, ...update };
  };

  console.log(updateProfile(myProfile, {name: 'Nayeem', age: 22 }));

  //
}
