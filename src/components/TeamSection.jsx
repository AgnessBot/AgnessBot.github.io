import React from 'react';
import {
    FaTwitter,
    FaGithub,
    FaSpotify,
    FaYoutube,
    FaSteam,
    FaFacebook,
    FaTwitch,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
function MemberTeam({ avatarURL, name, rolesList, socialMediaList }) {
    return (
        <div className="flex justify-center items-center flex-col bg-gray-900 w-64 h-72 rounded-2xl mx-10 my-3 shadow-xl">
            <img
                className="rounded-full border-4 border-green-300"
                src={avatarURL}
                alt={name.toLowerCase()}
                width="125"
                height="125"
            />
            <div className="flex justify-center items-center flex-col">
                <h3 className="text-white text-2xl font-bold mt-4 mb-2">
                    {name}
                </h3>
                <h3 className="text-lg text-green-400 font-bold mb-2">
                    {rolesList}
                </h3>
            </div>
            {socialMediaList && (
                <div className="mt-px flex justify-center items-center">
                    {socialMediaList.map(
                        (
                            {
                                iconComponent: IconComponent,
                                urlRedirect,
                                iconSize = 20,
                            },
                            index
                        ) => {
                            const iconColors = {
                                FaTwitter: 'hover:text-blue-400',
                                FaGithub: 'hover:text-black',
                                FaSpotify: 'hover:text-green-600',
                                FaYoutube: 'hover:text-red-500',
                                FaSteam: 'hover:text-black',
                                FaFacebook: 'hover:text-blue-700',
                                FaTwitch: 'hover:text-purple-500',
                            };
                            return (
                                <a
                                    key={index}
                                    href={urlRedirect}
                                    className={`m-1.5 text-white duration-500 ${
                                        iconColors[IconComponent.name]
                                    }`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IconComponent size={iconSize} />
                                </a>
                            );
                        }
                    )}
                </div>
            )}
        </div>
    );
}
MemberTeam.propTypes = {
    avatarURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rolesList: PropTypes.string.isRequired,
    socialMediaList: PropTypes.arrayOf(
        PropTypes.shape({
            iconComponent: PropTypes.node.isRequired,
            urlRedirect: PropTypes.string.isRequired,
            iconSize: PropTypes.string,
            iconColorHover: PropTypes.string.isRequired,
        })
    ),
};

const TeamSection = () => {
    return (
        <section className="bg-gray-800 py-20">
            <div className="flex items-center justify-center flex-col mb-8">
                <h1 className="text-white font-black text-5xl">
                    Meet our team
                </h1>
                <div className="mt-4 bg-white h-1 w-28 rounded-full"></div>
            </div>
            <div className="flex justify-center items-baseline flex-wrap">
                <MemberTeam
                    avatarURL="https://cdn.discordapp.com/attachments/831183150062895144/859278404666785802/avatar.png"
                    name="Jairo"
                    rolesList="Frontend Developer"
                    socialMediaList={[
                        {
                            iconComponent: FaTwitter,
                            urlRedirect: 'https://twitter.com/jairosalinas220',
                        },
                        {
                            iconComponent: FaGithub,
                            urlRedirect: 'https://github.com/jairosalinas220',
                        },
                        {
                            iconComponent: FaTwitch,
                            urlRedirect:
                                'https://www.twitch.tv/jairosalinas220',
                        },
                    ]}
                />
                <MemberTeam
                    avatarURL="https://cdn.discordapp.com/attachments/831183150062895144/859580035831693352/avatar.gif"
                    name="Andremor"
                    rolesList="Administrator"
                    socialMediaList={[
                        {
                            iconComponent: FaFacebook,
                            urlRedirect:
                                'https://www.facebook.com/2994522970773269',
                        },
                        {
                            iconComponent: FaTwitter,
                            urlRedirect: 'https://twitter.com/AndreMor8',
                        },
                        {
                            iconComponent: FaGithub,
                            urlRedirect: 'https://github.com/AndreMor8',
                        },
                        {
                            iconComponent: FaYoutube,
                            urlRedirect:
                                'https://www.youtube.com/channel/UCAdOKvsupGrVgZkRWmoCCAQ',
                        },
                    ]}
                />
                <MemberTeam
                    avatarURL="https://cdn.discordapp.com/attachments/831183150062895144/859278358059941908/avatar.png"
                    name="Deivid"
                    rolesList="Administrator, Co-Owner"
                    socialMediaList={[
                        {
                            iconComponent: FaTwitter,
                            urlRedirect: 'https://twitter.com/Drylozu',
                        },
                        {
                            iconComponent: FaGithub,
                            urlRedirect: 'https://github.com/Drylozu',
                        },
                        {
                            iconComponent: FaTwitch,
                            urlRedirect: 'https://www.twitch.tv/drylozu',
                        },
                    ]}
                />
                <MemberTeam
                    avatarURL="https://cdn.discordapp.com/attachments/831183063105929226/859597181844979712/avatar.png"
                    name="ale."
                    rolesList="Support"
                    socialMediaList={[
                        {
                            iconComponent: FaSpotify,
                            urlRedirect:
                                'https://open.spotify.com/user/yctgyl6x1cmn9ufquddopplwt',
                        },
                        {
                            iconComponent: FaYoutube,
                            urlRedirect:
                                'https://www.youtube.com/channel/UCs4yHQuQBg-VY22W4rHJW2w',
                        },
                    ]}
                />
                <MemberTeam
                    avatarURL="https://cdn.discordapp.com/attachments/831183063105929226/859591739961245726/avatar.png"
                    name="Abiiee."
                    rolesList="Owner"
                    socialMediaList={[
                        {
                            iconComponent: FaTwitter,
                            urlRedirect: 'https://twitter.com/Abiiee__',
                        },
                        {
                            iconComponent: FaGithub,
                            urlRedirect: 'https://github.com/Abiiee',
                        },
                        {
                            iconComponent: FaSpotify,
                            urlRedirect:
                                'https://open.spotify.com/user/ou4tfljbp52cvc54alsgnmozv',
                        },
                        {
                            iconComponent: FaTwitch,
                            urlRedirect: 'https://www.twitch.tv/abiiee_',
                        },
                    ]}
                />
                <MemberTeam
                    avatarURL="https://cdn.discordapp.com/attachments/831183150062895144/859581633077575710/avatar.png"
                    name="Frosty"
                    rolesList="Support & Moderator"
                    socialMediaList={[
                        {
                            iconComponent: FaTwitter,
                            urlRedirect: 'https://twitter.com/gamer1_frosty',
                        },
                        {
                            iconComponent: FaGithub,
                            urlRedirect: 'https://github.com/Frostys-37',
                        },
                        {
                            iconComponent: FaSpotify,
                            urlRedirect:
                                'https://open.spotify.com/user/xd4f1coz4htr0ofpzrj6zcfu0',
                        },
                        {
                            iconComponent: FaYoutube,
                            urlRedirect:
                                'https://www.youtube.com/channel/UCXSgYH-NniV0wVvfdEbUQtw',
                        },
                        {
                            iconComponent: FaSteam,
                            urlRedirect:
                                'https://steamcommunity.com/profiles/76561199137648672',
                        },
                    ]}
                />
            </div>
        </section>
    );
};
export default TeamSection;
