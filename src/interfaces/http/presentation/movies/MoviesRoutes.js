var express = require("express");
var router = express.Router();
var enumHttpCodes = require("../../../../domain/enum/httpStatusCodeEnum");

// Create Movie
router.post("/", function (req, res) {
	try {
	} catch (error) {
		res.status(enumHttpCodes.ERROR).send(
			`Não foi possível criar o filme. Err.: ${error.message}`
		);
	}
});

// Find Movie
router.get("/:id", function (req, res) {
	try {
	} catch (error) {
		res.status(enumHttpCodes.ERROR).send(
			`Não foi possível criar o filme. Err.: ${error.message}`
		);
	}
});

// Full update Movie
router.put("/:id", function (req, res) {
	try {
	} catch (error) {
		res.status(enumHttpCodes.ERROR).send(
			`Não foi possível criar o filme. Err.: ${error.message}`
		);
	}
});

// Partial update Movie
router.patch("/:id", function (req, res) {
	try {
	} catch (error) {
		res.status(enumHttpCodes.ERROR).send(
			`Não foi possível criar o filme. Err.: ${error.message}`
		);
	}
});

// Delete Movie
router.delete("/:id", function (req, res) {
	try {
	} catch (error) {
		res.status(enumHttpCodes.ERROR).send(
			`Não foi possível criar o filme. Err.: ${error.message}`
		);
	}
});

//all Listar filmes
router.get("/all", function (req, res) {
	try {
	} catch (error) {
		res.status(enumHttpCodes.ERROR).send(
			`Não foi possível criar o filme. Err.: ${error.message}`
		);
	}
});

// book Reservar um filme
router.patch("/book/:id", function (req, res) {
	try {
	} catch (error) {
		res.status(enumHttpCodes.ERROR).send(
			`Não foi possível criar o filme. Err.: ${error.message}`
		);
	}
});

//confirm Confirmar locação
router.patch("/confirm/:id", function (req, res) {
	try {
	} catch (error) {
		res.status(enumHttpCodes.ERROR).send(
			`Não foi possível criar o filme. Err.: ${error.message}`
		);
	}
});

// return Retornar um filme
router.patch("/return/:id", function (req, res) {
	try {
	} catch (error) {
		res.status(enumHttpCodes.ERROR).send(
			`Não foi possível criar o filme. Err.: ${error.message}`
		);
	}
});

module.exports = router;
