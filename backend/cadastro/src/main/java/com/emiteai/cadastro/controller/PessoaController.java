package com.emiteai.cadastro.controller;

import com.emiteai.cadastro.model.Pessoa;
import com.emiteai.cadastro.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pessoa")
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class PessoaController {

    @Autowired
    private PessoaService pessoaService;

    @PostMapping
    public ResponseEntity<Pessoa> cadastrarPessoa(@RequestBody Pessoa pessoa) {
        Pessoa pessoaSalva = pessoaService.cadastrarPessoa(pessoa);
        return ResponseEntity.ok(pessoaSalva);
    }

    @GetMapping
    public ResponseEntity<List<Pessoa>> getPessoas() {
        List<Pessoa> pessoas = pessoaService.getAllPessoas();
        return ResponseEntity.ok(pessoas);
    }

}
