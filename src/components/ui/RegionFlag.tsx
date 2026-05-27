// ISO country codes for flag images (flagcdn.com)
const regionFlagCodes: Record<string, string | null> = {
  "Chile": "cl",
  "México": "mx",
  "Camboya": "kh",
  "Latinoamérica": null,
  "El Salvador": "sv",
  "Honduras": "hn",
  "Panamá": "pa",
  "Guatemala": "gt",
  "Colombia": "co",
  "Paraguay": "py",
  "Costa Rica": "cr",
  "Ecuador": "ec",
  "Perú": "pe",
  "Uruguay": "uy",
  "República Dominicana": "do",
  "Trinidad y Tobago": "tt",
  "Centroamérica": null,
  "Cuba": "cu",
  "Jamaica": "jm",
  "Rep. Dominicana y Uruguay": null,
  "Global": null,
  "Asia-Pacífico": null,
};

export function RegionFlag({ region, size = 24 }: { region: string; size?: number }) {
  const code = regionFlagCodes[region];
  const height = Math.round(size * 0.75);
  if (code) {
    return (
      <img
        src={`https://flagcdn.com/${size}x${height}/${code}.png`}
        srcSet={`https://flagcdn.com/${size * 2}x${height * 2}/${code}.png 2x`}
        width={size}
        height={height}
        alt={region}
        className="inline-block rounded-sm"
      />
    );
  }
  const globeEmoji = region === "Asia-Pacífico" ? "🌏" : "🌎";
  return <span className="text-lg leading-none">{globeEmoji}</span>;
}
