const directionOfwWind = (degree) => {
    if (degree > 337.5) { return 'North' };
    if (degree > 292.5) { return 'North-West' };
    if (degree > 247.5) { return 'West' };
    if (degree > 202.5) { return 'South-West' };
    if (degree > 157.5) { return 'South' };
    if (degree > 122.5) { return 'South-Ost' };
    if (degree > 67.5) { return 'Ost' };
    if (degree > 22.5) { return 'North-Ost' }
    return 'North';
};

export { directionOfwWind };