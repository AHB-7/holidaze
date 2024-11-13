import { IoMdSettings } from "react-icons/io";
import { useUserStore } from "../../hooks/utilities/login-state";
import {
    ProfileAvatar,
    ProfileBannerContainer,
    ProfileBannerImage,
    ProfileBio,
    ProfileBioContainer,
    ProfileContainer,
    ProfileInfo,
    ProfileName,
} from "../../styles/profile/profile";

export function Profile() {
    const user = useUserStore((state) => state.user);
    return (
        <ProfileContainer>
            <ProfileBannerContainer>
                <ProfileBannerImage
                    src={user?.banner.url}
                    alt={user?.banner.alt}
                />
                <ProfileAvatar src={user?.avatar.url} alt={user?.avatar.alt} />
            </ProfileBannerContainer>
            <ProfileInfo>
                <ProfileName>
                    {user?.name} <IoMdSettings />
                </ProfileName>
                <ProfileBioContainer>
                    <ProfileBio>{user?.bio}</ProfileBio>
                </ProfileBioContainer>
            </ProfileInfo>
        </ProfileContainer>
    );
}
