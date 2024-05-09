package com.emiteai.cadastro.service;

import com.emiteai.cadastro.model.Pessoa;
import com.emiteai.cadastro.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PessoaService {

    private final PessoaRepository pessoaRepository;

    @Autowired
    public PessoaService(PessoaRepository pessoaRepository) {
        this.pessoaRepository = pessoaRepository;
    }

    public Pessoa cadastrarPessoa(Pessoa pessoa) {
        validarPessoa(pessoa.getCpf());
        return pessoaRepository.save(pessoa);
    }

    public List<Pessoa> getAllPessoas() {
        return pessoaRepository.findAll();
    }

    private void validarPessoa(String cpf) {
        if (pessoaRepository.findByCpf(cpf) != null) {
            throw new RuntimeException("CPF já cadastrado");
        }
    }
}
