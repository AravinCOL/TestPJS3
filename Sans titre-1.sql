
REM *** TRIGGER T_MAJ_CACHET
CREATE OR REPLACE TRIGGER T_MAJ_CACHET
AFTER INSERT OR DELETE OR UPDATE OF MontantCachet ON INTERPRETATION
FOR EACH ROW
BEGIN


IF INSERTING THEN
UPDATE interprete SET cachettotal=cachettotal + :NEW.MontantCachet WHERE idinter=:NEW.idinter;
ELSIF DELETING THEN
UPDATE interprete SET cachettotal= (cachettotal- :OLD.MontantCachet) WHERE idinter=:OLD.idinter;
ELSE 
UPDATE interprete SET cachettotal=(cachettotal-:OLD.MontantCachet) + :NEW.MontantCachet WHERE idinter= :New.idinter 
END IF;

END;
