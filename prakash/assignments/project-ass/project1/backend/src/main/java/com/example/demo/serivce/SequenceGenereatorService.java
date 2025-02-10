package com.example.demo.serivce;

import static org.springframework.data.mongodb.core.query.Query.query;
import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import org.springframework.data.mongodb.core.MongoOperations;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import java.util.Objects;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.example.demo.model.DatabaseSequence;
@Service
public class SequenceGenereatorService {
	@Autowired
	MongoOperations mongoOperations; 
	
	
	
	public  long generateSequence(long seqName) {
	    DatabaseSequence counter = mongoOperations.findAndModify(query(where("_id").is(seqName)),
	      new Update().inc("seq",1), options().returnNew(true).upsert(true),
	      DatabaseSequence.class);
	    return !Objects.isNull(counter) ? counter.getSeq() : 1;
	    }
}
