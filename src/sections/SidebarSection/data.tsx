import {
  AccountIcon,
  AddIcon,
  AlbumIcon,
  DiscoverIcon,
  HeartIcon,
  HomeIcon,
  ImportIcon,
  MusicIcon,
  PlayIconSmall,
  SettingIcon,
  SpeakerIcon,
  TimeIcon,
  TrendingIcon,
} from "../../assets/icons";

export const sidebarMenu = [
  {
    text: "Discover",
    icon: <DiscoverIcon />,
  },
  {
    text: "Trending",
    icon: <TrendingIcon />,
  },
  {
    text: "Genre",
    icon: <AlbumIcon />,
  },
  {
    text: "Album",
    icon: <MusicIcon />,
  },
  {
    text: "Speaker",
    icon: <SpeakerIcon />,
  },
];
export const sidebarLibrary = [
  {
    text: "Recent",
    icon: <TimeIcon />,
  },
  {
    text: "Playlist",
    icon: <PlayIconSmall />,
  },
  {
    text: "Favourites",
    icon: <HeartIcon />,
  },
  {
    text: "Local",
    icon: <HomeIcon />,
  },
];
export const sidebarCustomize = [
  {
    text: "New Playlist",
    icon: <AddIcon />,
  },
  {
    text: "Import Playlist",
    icon: <ImportIcon />,
  },
  {
    text: "Account",
    icon: <AccountIcon />,
  },
  {
    text: "Setting",
    icon: <SettingIcon />,
  },
];
