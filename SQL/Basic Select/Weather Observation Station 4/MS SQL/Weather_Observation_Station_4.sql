DECLARE @cities int;
DECLARE @distinctCities int;

SET @cities = (SELECT COUNT (CITY) FROM STATION);
SET @distinctCities = (SELECT COUNT (DISTINCT CITY) FROM STATION);

SELECT @cities - @distinctCities;
