-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema dbactividades
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dbactividades
-- -----------------------------------------------------
CREATE DATABASE IF NOT EXISTS test;
USE dbactividades;

-- -----------------------------------------------------
-- Table `dbactividades`.`actividades_completadas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbactividades`.`actividades_completadas` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(60) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `fecha` DATE NOT NULL,
  `valor` INT(4) NOT NULL,
  `info` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 59
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `dbactividades`.`actividades_pendientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbactividades`.`actividades_pendientes` (
  `id` INT(10) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(60) NOT NULL,
  `descripcion` VARCHAR(300) NOT NULL,
  `fecha` DATE NOT NULL,
  `valor` INT(4) NOT NULL,
  `seleccionada` VARCHAR(1) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 49
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

INSERT INTO actividades_pendientes(nombre, descripcion, fecha, valor, seleccionada) VALUES
('Actividad1', 'Ver el siguiente vídeo y anotar lo que entendieron: https://www.youtube.com/watch?v=FduLSXEHLng', '2021-06-25', 25, 'N');

INSERT INTO actividades_pendientes(nombre, descripcion, fecha, valor, seleccionada) VALUES
('Actividad2', 'Investigar que es un socket, caracteristicas y ejemplos de la vida real.', '2021-06-25', 25, 'N');

INSERT INTO actividades_pendientes(nombre, descripcion, fecha, valor, seleccionada) VALUES
('Actividad1', 'Elaborar un chat con websockets (subir el link del repositorio de github).', '2021-06-25', 50, 'N');
